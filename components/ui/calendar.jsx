"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "p-3 rounded-xl border border-[var(--secondary-foreground)]/10  shadow-sm",
        className,
      )}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium text-[var(--foreground)]",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100 border-[var(--secondary-foreground)]/20 text-[var(--secondary-foreground)] hover:bg-[var(--accent)]/20 hover:text-[var(--foreground)] transition-colors",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-[var(--secondary-foreground)] rounded-md w-9 font-normal text-[0.8rem] uppercase tracking-wide",
        row: "flex w-full mt-2",
        cell: cn(
          "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
          // Range styling
          "[&:has([aria-selected].day-range-end)]:rounded-r-md",
          "[&:has([aria-selected].day-outside)]:bg-[var(--accent)]/50",
          "[&:has([aria-selected])]:bg-[var(--accent)]/20",
          "first:[&:has([aria-selected])]:rounded-l-md",
          "last:[&:has([aria-selected])]:rounded-r-md",
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-[var(--foreground)] hover:bg-[var(--accent)]/20 hover:text-[var(--foreground)] transition-colors",
        ),
        day_range_end: "day-range-end",
        day_selected: cn(
          "bg-[var(--accent)] text-[var(--foreground)] hover:bg-[var(--accent-dark)] hover:text-[var(--foreground)] focus:bg-[var(--accent)] focus:text-[var(--foreground)]",
          "rounded-md shadow-sm",
        ),
        day_today:
          "bg-[var(--secondary-background)] text-[var(--foreground)] font-semibold rounded-md",
        day_outside: cn(
          "day-outside text-[var(--secondary-foreground)] opacity-50",
          "aria-selected:bg-[var(--accent)]/30 aria-selected:text-[var(--secondary-foreground)] aria-selected:opacity-70",
        ),
        day_disabled:
          "text-[var(--secondary-foreground)] opacity-40 cursor-not-allowed",
        day_range_middle:
          "aria-selected:bg-[var(--accent)]/40 aria-selected:text-[var(--foreground)]",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
