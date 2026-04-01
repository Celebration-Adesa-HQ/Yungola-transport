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
      className={cn("p-3 bg-white text-brown", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium text-brown",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 p-0 text-brown bg-white hover:bg-yellow-700 hover:text-white",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-brown rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "h-9 w-9 text-center text-sm p-0 relative rounded-md",
          "focus-within:relative focus-within:z-20",
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal text-brown hover:bg-yellow-700 hover:text-white",
        ),
        day_selected:
          "bg-yellow-700 text-white hover:bg-yellow-800 focus:bg-yellow-800 focus:text-white",
        day_today: "bg-yellow-700 text-white",
        day_outside: "text-brown opacity-50",
        day_disabled: "text-brown opacity-50",
        day_range_middle: "bg-yellow-700 text-white",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: (props) => (
          <ChevronLeft className="h-4 w-4 text-brown" {...props} />
        ),
        IconRight: (props) => (
          <ChevronRight className="h-4 w-4 text-brown" {...props} />
        ),
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
