import { motion } from "framer-motion";
import { Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/blog/${post.slug}`}>
        <motion.article
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer card-hover-glow transition-all duration-300 group h-full flex flex-col"
        >
          {/* Cover */}
          <div className="relative h-44 bg-muted overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-3xl text-muted-foreground/20 font-bold">
                {"{ }"}
              </span>
            </div>
            <span className="absolute top-3 left-3 font-mono text-[10px] font-semibold bg-primary/90 text-primary-foreground px-2.5 py-1 rounded-md">
              {post.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="font-semibold text-sm text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-xs text-muted-foreground mb-4 line-clamp-2 flex-1">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                  <User className="w-3 h-3" />
                </div>
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span>{new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readingTime}m
                </span>
              </div>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
