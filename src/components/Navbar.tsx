"use client";

import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elTop = rect.top + scrollTop;
      const elHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const navbarHeight = 30;

      // Center the section in the viewport
      let targetY = elTop - (viewportHeight / 2) + (elHeight / 2);

      // Cap: scroll up to 40px into the section's top padding
      // so headings appear right below the navbar for tall sections
      const maxScroll = elTop + 20;
      if (targetY > maxScroll) {
        targetY = maxScroll;
      }

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/40 backdrop-blur-lg border-b border-white/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="text-2xl font-heading font-semibold text-primary">
          YogWithMegha
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 inline-block"
          >
            Book a Class
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground hover:text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-muted/50 shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-muted/30 last:border-0"
              onClick={(e) => {
                scrollTo(e, link.href);
                setIsOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              scrollTo(e, "#contact");
              setIsOpen(false);
            }}
            className="mt-4 px-6 py-3 text-center bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors shadow-sm"
          >
            Book a Class
          </a>
        </div>
      )}
    </nav>
  );
}
