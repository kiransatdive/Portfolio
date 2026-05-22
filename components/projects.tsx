"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project, projects as defaultProjects } from "@/constants/projects";
import { SectionHeading } from "./section-heading";
import { TechTooltip } from "@/components/ui/tech-tooltip";
import { SiExpress, SiMysql, SiPostgresql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export function Projects({ projects = defaultProjects }: { projects?: Project[] }) {

  const techs = [
     {
    id: 1,
    name: "Node.js",
    designation: "Backend Runtime",
    icon: <FaNodeJs className="text-green-500 text-4xl" />,
  },
  {
    id: 2,
    name: "Express.js",
    designation: "Web Framework",
    icon: <SiExpress className="text-gray-300 text-4xl" />,
  },
  {
    id: 3,
    name: "MySQL",
    designation: "Database",
    icon: <SiMysql className="text-blue-500 text-4xl" />,
  },
  {
    id: 4,
    name: "PostgreSQL",
    designation: "Relational Database",
    icon: <SiPostgresql className="text-sky-500 text-4xl" />,
  },
  ];

  return (
    <div className="my-4 -mx-4 border-x border-neutral-100 shadow-section-inset px-4 py-4">
      <SectionHeading delay={0.2} className="mb-4">
        A lifetime in projects
      </SectionHeading>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            key={idx}
            className="group relative mb-4"
          >
            <Link href={project.href}>
              <div className="hover:shadow-sm hover:shadow-gray-400/50 rounded-2xl transition-all duration-300">
                <Image
                  src={project.src}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="h-50 w-full rounded-t-2xl object-cover transition duration-200 group-hover:scale-[1.02] cursor-pointer"
                />
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="px-2 py-4 rounded-b-2xl">
                  <h2 className="font-medium tracking-tight z-20 text-neutral-500 dark:text-neutral-400 px-4">
                    {project.title}
                  </h2>
                  <p className="text-sm max-w-sm text-neutral-500 dark:text-neutral-400 px-4 min-h-[3rem] flex items-center">
                    {project.description}
                  </p>
                  <div className="flex py-4 px-4">
                    <TechTooltip items={techs.filter(tech => tech.name === "HTML5" || tech.name === "JavaScript" || tech.name === "CSS3" || tech.name === "Tailwind")} />
                  </div>
                </motion.div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
