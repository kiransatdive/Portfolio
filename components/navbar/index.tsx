"use client";
import React, { useState } from "react";
import { Container } from "@/components/container";
import Image from "next/image";
import {Link} from "next-view-transitions";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";

function Navbar() {
  const navItems = [
    { title: "About ", href: "/about" },
    { title: "Projects", href: "/projects" },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 100], [0, 16]);
  const width = useTransform(scrollY, [0, 100], ["65%", "50%"]);
  const maxWidth = useTransform(scrollY, [0, 100], ["800px", "500px"]); // 8k6 is max-w-4xl

  const [scrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav
      style={{
        boxShadow: scrolled ? "var(--shadow-input)" : "none",
        width,
        maxWidth,
        y,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={`fixed flex inset-x-4 top-4 z-50 mx-auto items-center justify-between p-2 ${
        scrolled 
          ? "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-full" 
          : "bg-transparent"
      }`}
    >
        <Link href={"/"}>
        <Image
          className="h-10 w-10 rounded-full"
          src="/Profile.jpg"
          height={100}
          width={100}
          alt={"avatar"}
        />
        </Link>
        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link
              className="text-sm relative px-2 py-1"
              href={item.href}
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
    </motion.nav>
  );
}

export default Navbar;
