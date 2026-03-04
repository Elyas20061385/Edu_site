import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-data";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const featuredPost = blogPosts.find((p) => p.featured)!;

  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter((p) => !p.featured)
      .filter((p) => activeCategory === "All" || p.category === activeCategory)
      .filter(
        (p) =>
          !searchQuery ||
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      );
  }, [activeCategory, searchQuery]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BlogHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FeaturedPost post={featuredPost} />

      <section className="container mx-auto px-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Grid */}
          <div className="flex-1">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="font-mono text-xs text-primary">
                // {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
              </span>
            </motion.div>

            {visiblePosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {visiblePosts.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No articles found.</p>
              </div>
            )}

            {hasMore && (
              <div className="text-center mt-10">
                <Button
                  variant="hero"
                  onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                >
                  Load More Articles
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-72 xl:w-80 shrink-0">
            <BlogSidebar
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
