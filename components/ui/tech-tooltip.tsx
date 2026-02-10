"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

interface TechItem {
  id: number;
  name: string;
  designation: string;
  icon: React.ReactNode;
}

export const TechTooltip = ({
  items,
}: {
  items: TechItem[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="group relative -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="absolute -top-14 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-white border border-gray-300 px-2 py-1 text-xs shadow-xl whitespace-nowrap"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-xs font-bold text-gray-700">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            className="relative !m-0 h-8 w-8 rounded-full border-2 border-white bg-gray-100 dark:bg-zinc-800 flex items-center justify-center transition duration-500 group-hover:z-30 group-hover:scale-105 cursor-pointer"
          >
            <div className="text-sm">
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
