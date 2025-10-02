"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-6 bg-white text-black flex items-center justify-between relative">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.svg" alt="Logo" width={60} height={60} priority />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300 ${
                isActive
                  ? "after:w-full after:bg-black"
                  : "after:w-0 after:bg-black hover:after:w-full"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[80px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-40 overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300 ${
                    isActive
                      ? "after:w-full after:bg-black font-semibold"
                      : "after:w-0 after:bg-black hover:after:w-full"
                  }`}
                  onClick={() => setMenuOpen(false)} // close menu when clicking a link
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
