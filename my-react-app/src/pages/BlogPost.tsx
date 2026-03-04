import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Share2, Twitter, Linkedin, Copy, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-data";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button variant="hero">Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div
          className="h-full bg-primary transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Header />

      {/* Hero */}
      <section className="relative h-64 md:h-80 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-7xl text-muted-foreground/10 font-bold">{"</>"}</span>
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 -mt-16 relative z-10 max-w-3xl">
        <motion.div
          className="bg-card border border-border rounded-2xl p-6 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back link */}
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Blog
          </Link>

          {/* Category */}
          <span className="font-mono text-[10px] font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-md">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="font-display text-2xl md:text-4xl font-black mt-4 mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-8 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                <User className="w-3.5 h-3.5" />
              </div>
              {post.author.name}
            </span>
            <span>
              {new Date(post.publishDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime} min read
            </span>
          </div>

          {/* Article body */}
          <div className="prose prose-sm max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-xl prose-h3:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed prose-code:font-mono prose-code:text-primary prose-code:text-xs prose-pre:bg-foreground/5 prose-pre:border prose-pre:border-border prose-pre:rounded-xl prose-pre:p-4 prose-pre:font-mono prose-pre:text-xs prose-a:text-primary prose-strong:text-foreground prose-li:text-muted-foreground prose-ol:text-muted-foreground">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) return <h2 key={i}>{line.replace("## ", "")}</h2>;
              if (line.startsWith("### ")) return <h3 key={i}>{line.replace("### ", "")}</h3>;
              if (line.startsWith("```")) return null;
              if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. "))
                return <li key={i}>{line.replace(/^\d+\.\s/, "")}</li>;
              if (line.startsWith("- ")) return <li key={i}>{line.replace("- ", "")}</li>;
              if (line.trim() === "") return null;
              return <p key={i}>{line.replace(/`([^`]+)`/g, "«$1»").split("«").map((part, j) => {
                if (part.includes("»")) {
                  const [code, rest] = part.split("»");
                  return <span key={j}><code>{code}</code>{rest}</span>;
                }
                return <span key={j}>{part}</span>;
              })}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium border border-border text-muted-foreground px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Share2 className="w-3.5 h-3.5" />
              Share
            </span>
            <button
              onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, "_blank")}
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Twitter className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => window.open(`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, "_blank")}
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleCopyLink}
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* CTA */}
          <div className="mt-8 p-5 bg-primary/5 border border-primary/10 rounded-xl">
            <h3 className="font-display font-bold text-sm mb-1">Continue Learning</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Explore related courses and level up your skills.
            </p>
            <Link to="/#courses">
              <Button variant="hero" size="sm">
                Browse Courses
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="container mx-auto px-4 py-16 max-w-3xl">
          <h2 className="font-display text-xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedPosts.map((p, i) => (
              <BlogCard key={p.id} post={p} index={i} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
