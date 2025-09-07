"use client";

import { useClickAway } from "react-use";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  // Menü açıkken body scroll'u kapat
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const navItems = ["about", "skills", "contact"];

  return (
    <>
      <nav className="flex items-center justify-between p-6 lg:px-12 relative z-10">
        {/* Email */}
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span className="text-sm font-medium">edanuurkorkmaz@gmail.com</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth
              duration={500}
              offset={-80}
              className="text-sm font-medium hover:text-purple-400 transition-colors cursor-pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div ref={ref} className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 cursor-pointer"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center z-20"
          >
            <motion.ul
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex flex-col gap-6 w-4/5 max-w-xs"
            >
              {navItems.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ScrollLink
                    key={item}
                    to={item}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setOpen(false)}
                    className="block cursor-pointer text-center py-3 rounded-2xl text-lg font-medium
                               bg-neutral-900/80 border border-white/10 
                               hover:border-purple-400 hover:text-purple-400 
                               transition-all duration-300 hover:scale-105"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </ScrollLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Links */}
      <div className="hidden md:flex fixed right-6  top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20  ">
        <Link
          href="https://www.linkedin.com/in/edanur-korkmaz/"
          target="_blank"
          aria-label="LinkedIn"
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <Linkedin className="h-5 w-5" />
        </Link>
        <Link
          href="https://github.com/edanuurkorkmaz"
          target="_blank"
          aria-label="GitHub"
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <Github className="h-5 w-5" />
        </Link>
        <Link
          href="https://x.com/edanuurkorkmaz"
          target="_blank"
          aria-label="Twitter"
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <Twitter className="h-5 w-5" />
        </Link>
      </div>
    </>
  );
}
