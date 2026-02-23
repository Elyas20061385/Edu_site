import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { categories, popularTags, blogPosts } from "@/lib/blog-data";

interface BlogSidebarProps {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

const BlogSidebar = ({ activeCategory, onCategoryChange }: BlogSidebarProps) => {
  const popularPosts = blogPosts.slice(0, 3);

  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="font-display font-bold text-sm mb-4">Categories</h3>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => onCategoryChange(cat)}
                className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                  activeCategory === cat
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="font-display font-bold text-sm mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="block group"
            >
              <h4 className="text-xs font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                {post.title}
              </h4>
              <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <Clock className="w-3 h-3" />
                {post.readingTime} min read
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="font-display font-bold text-sm mb-2">Newsletter</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Get the latest articles delivered to your inbox every week.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
          <Input placeholder="you@example.com" type="email" className="text-sm h-9" />
          <Button variant="hero" size="sm" className="w-full">
            Subscribe
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </form>
      </div>

      {/* Tags */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="font-display font-bold text-sm mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium border border-border text-muted-foreground px-2.5 py-1 rounded-full hover:border-primary/40 hover:text-primary cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
