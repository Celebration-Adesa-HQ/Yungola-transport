"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function NavItem({ link, activeDropdown, setActiveDropdown }) {
  const hasDropdown = link.dropdown?.length > 0;

  return (
    <div
      onMouseEnter={() => hasDropdown && setActiveDropdown(link.name)}
      onMouseLeave={() => setActiveDropdown(null)}
      className="relative"
    >
      <motion.a
        href={link.href}
        className="flex items-center gap-1 px-3 sm:px-4 py-2 text-sm sm:text-base"
      >
        <link.icon className="w-4 h-4" />
        {link.name}

        {hasDropdown && (
          <ChevronDown
            className={`w-3 h-3 ${
              activeDropdown === link.name ? "rotate-180" : ""
            }`}
          />
        )}
      </motion.a>

      {hasDropdown && (
        <AnimatePresence>
          {activeDropdown === link.name && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-full left-0 mt-2 w-52 sm:w-56 bg-[var(--background)] border rounded-xl shadow"
            >
              {link.dropdown.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm hover:bg-[var(--accent)]/10"
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
