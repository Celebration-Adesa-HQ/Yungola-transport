"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  X,
  Calculator,
  Calendar,
  Truck,
  Users,
  Phone,
} from "lucide-react";
import { useState } from "react";

export default function MobileMenu({ isOpen, onClose, navLinks }) {
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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="
              fixed right-0 top-0 z-50
              w-[85vw] max-w-sm
              sm:max-w-md
              md:max-w-lg
              h-[100dvh]
            "
          >
            <div className="flex flex-col h-full bg-[var(--background)]/95 backdrop-blur-2xl border-l border-[var(--accent)]/20 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 border-b border-[var(--foreground)]/10 flex-shrink-0">
                <span className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-[var(--accent-dark)] to-[var(--accent)] bg-clip-text text-transparent">
                  Yungola Transport
                </span>

                <motion.button
                  onClick={onClose}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg hover:bg-[var(--accent)]/10"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                {/* Nav */}
                <nav className="px-3 py-4 sm:px-4 sm:py-6">
                  <div className="space-y-1">
                    {navLinks.map((link) => {
                      const IconComponent = getIconComponent(link.icon);
                      const hasDropdown = link.dropdown?.length > 0;

                      return (
                        <MobileNavItem
                          key={link.name}
                          link={link}
                          IconComponent={IconComponent}
                          hasDropdown={hasDropdown}
                          onClose={onClose}
                        />
                      );
                    })}
                  </div>

                  {/* Contact */}
                  <div className="mt-6 pt-5 border-t border-[var(--foreground)]/10 space-y-3">
                    <a
                      href="tel:+2348000000000"
                      onClick={onClose}
                      className="flex items-center gap-3 px-3 py-3 sm:px-4 rounded-xl text-sm sm:text-base text-[var(--secondary-foreground)] hover:bg-[var(--accent)]/10"
                    >
                      <Phone className="w-5 h-5 text-[var(--accent)]" />
                      <span>+234 800 VEASE</span>
                    </a>

                    <motion.a
                      href="#contact"
                      onClick={onClose}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center w-full px-4 py-3 rounded-xl text-sm sm:text-base font-semibold bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-[var(--foreground)]"
                    >
                      Get in Touch
                    </motion.a>
                  </div>
                </nav>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function MobileNavItem({ link, IconComponent, hasDropdown, onClose }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-1">
      <button
        onClick={(e) => {
          if (hasDropdown) {
            e.preventDefault();
            setExpanded(!expanded);
          } else {
            onClose();
          }
        }}
        className="flex w-full items-center justify-between px-3 py-3 sm:px-4 rounded-xl text-sm sm:text-base font-medium text-[var(--foreground)] hover:bg-[var(--accent)]/10"
      >
        <span className="flex items-center gap-3">
          <IconComponent className="w-5 h-5 text-[var(--accent)]" />
          {link.name}
        </span>

        {hasDropdown && (
          <ChevronDown
            className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        )}
      </button>

      <AnimatePresence initial={false}>
        {hasDropdown && expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="ml-8 sm:ml-10 space-y-1"
          >
            {link.dropdown.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block px-3 py-2 text-xs sm:text-sm rounded-lg text-[var(--secondary-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]/5"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
