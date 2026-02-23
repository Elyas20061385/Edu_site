import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/lib/blog-data";

const FeaturedPost = ({ post }: { post: BlogPost }) => {
  return (
    <motion.section
      className="container mx-auto px-4 -mt-8 relative z-10 mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Link to={`/blog/${post.slug}`}>
        <div className="bg-card border border-border rounded-2xl overflow-hidden card-hover-glow transition-all duration-300 group flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative md:w-2/5 h-56 md:h-auto bg-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-5xl text-muted-foreground/15 font-bold">{"</>"}</span>
            </div>
            <span className="absolute top-4 left-4 font-mono text-[10px] font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-md">
              Featured
            </span>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
            <span className="font-mono text-[10px] text-primary font-semibold uppercase tracking-widest mb-2">
              {post.category}
            </span>
            <h2 className="font-display text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-5 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
              <span className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                  <User className="w-3 h-3" />
                </div>
                {post.author.name}
              </span>
              <span>{new Date(post.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readingTime} min read
              </span>
            </div>

            <div>
              <Button variant="hero" size="sm">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.section>
  );
};

export default FeaturedPost;
