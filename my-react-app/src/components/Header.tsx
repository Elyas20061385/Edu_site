import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import SignupDialog from "@/components/SignupDialog";

const navLinks = [
  { label: "Courses", href: "/#courses" },
  { label: "Roadmaps", href: "/#roadmap" },
  { label: "Bootcamps", href: "#" },
  { label: "Blog", href: "/blog" },
];

const Header = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-mono text-primary-foreground font-bold text-sm">{`</>`}</span>
          </div>
          <span className="font-display font-bold text-lg text-foreground">
            Dev<span className="text-primary">Stream</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Search + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div
            className={`relative transition-all duration-300 ${
              searchFocused ? "glow-border-focus" : "glow-border"
            } rounded-lg`}
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="bg-muted text-foreground text-sm pl-10 pr-4 py-2 rounded-lg w-56 focus:w-72 transition-all duration-300 outline-none placeholder:text-muted-foreground"
            />
          </div>
          <Button variant="hero" size="sm" onClick={() => setSignupOpen(true)}>
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="sm" className="w-full" onClick={() => { setSignupOpen(true); setMobileOpen(false); }}>
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <SignupDialog open={signupOpen} onOpenChange={setSignupOpen} />
    </header>
  );
};

export default Header;
