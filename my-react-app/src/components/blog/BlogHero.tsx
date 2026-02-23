import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

interface BlogHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const BlogHero = ({ searchQuery, onSearchChange }: BlogHeroProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <section className="relative py-20 bg-muted/30 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 font-mono text-6xl text-foreground/10">{"{"}</div>
        <div className="absolute bottom-10 right-10 font-mono text-6xl text-foreground/10">{"}"}</div>
        <div className="absolute top-1/2 left-1/3 font-mono text-4xl text-foreground/5">{"</>"}</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-primary mb-3 block">
            // devstream.blog
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-4">
            Insights for Modern{" "}
            <span className="text-gradient-red">Developers</span>
          </h1>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Tutorials, career advice, and deep dives into full-stack development
          </p>

          <div
            className={`relative max-w-md mx-auto transition-all duration-300 ${
              focused ? "glow-border-focus" : "glow-border"
            } rounded-lg`}
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="bg-card text-foreground w-full pl-11 pr-4 py-3 rounded-lg text-sm outline-none placeholder:text-muted-foreground border-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
