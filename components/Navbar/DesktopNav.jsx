"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Calendar, ChevronDown, Truck, Users } from "lucide-react";

export default function DesktopNav({ navLinks }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "Truck":
        return Truck;
      case "Calculator":
        return Calculator;
      case "Calendar":
        return Calendar;
      case "Users":
        return Users;
      default:
        return Truck;
    }
  };

  return (
    <div className="hidden lg:flex items-center gap-1">
      {navLinks.map((link) => {
        const IconComponent = getIconComponent(link.icon);
        const hasDropdown = link.dropdown?.length > 0;

        return (
          <div
            key={link.name}
            className="relative"
            onMouseEnter={() => {
              if (hasDropdown) setActiveDropdown(link.name);
            }}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <motion.a
              href={link.href}
              className="group flex items-center gap-1.5 px-4 py-2 rounded-lg text-[var(--foreground)] hover:text-[var(--accent-dark)] dark:hover:text-[var(--accent)] font-medium transition-colors"
              whileHover={{ x: 2 }}
            >
              <IconComponent className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              <span>{link.name}</span>

              {hasDropdown && (
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === link.name ? "rotate-180" : ""
                  }`}
                />
              )}

              <motion.span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--accent)] rounded-full group-hover:w-3/4"
                transition={{ duration: 0.2 }}
              />
            </motion.a>

            <AnimatePresence>
              {hasDropdown && activeDropdown === link.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-56 backdrop-blur-xl bg-[var(--background)]/95 dark:bg-[var(--background)]/90 border border-[var(--accent)]/20 rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="py-2">
                    {link.dropdown?.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-[var(--secondary-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]/10 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
