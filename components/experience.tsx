"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { TechTooltip } from "./ui/tech-tooltip";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaJava
} from "react-icons/fa";
import { IconBrandTailwind } from "@tabler/icons-react";

const experiences = [
    {
        id: 1,
        img: "/images/experience/logo.png",
        img_alt: "BugBattlers PRV.LTD",
        title: "Backend Engineer",
        company: "BugBattlers PRV.LTD",
        company_link: "https://bugbattlers.com",
        date: "Nov 2025 - Present",
        description: "Developed and maintained scalable software solutions for a global user base, handling backend development and integrating different APIs. Designed and implemented server-side architectures, developed RESTful APIs, and ensured system scalability and performance.",
        skills: [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Python", icon: <FaPython className="text-blue-600" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> }
]
    },
    {
        id: 2,
        img: "/images/experience/logojbk.webp",
        img_alt: "Java By Kiran",
        title: "Java FullStack Developer",
        company: "Java By Kiran",
        company_link: "https://javabykiran.com",
        date: "Jun 2024 - Jan 2025",
        description: "Completed a Java Full Stack Developer course and an internship at Java By Kiran. Contributed to the development of user interface components and improved application performance.",
        skills: [
  { name: "Java", icon: <FaJava className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-blue-500" /> },
   { name: "AWS", icon: <FaAws className="text-blue-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },

]
    },
];

export default function Experience() {
    return (
        <div className="relative py-4">
            <SectionHeading delay={0.4} className="mb-4">
                Worked at reputed firms.
            </SectionHeading>
            <div className="space-y-8">
                {experiences.map((exp, idx) => (
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: idx * 0.1,
                          ease: "easeInOut",
                        }}
                        key={idx}
                        className="group relative overflow-hidden p-6 transition-all duration-300"
                    >
                        <div className="flex items-center gap-6">
                            <div className="flex-1 text-left">
                                <div className="flex items-center gap-2 mb-2">
                                    <a 
                                        href={exp.company_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link inline-flex items-center gap-2"
                                    >
                                        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 transition-colors duration-200">
                                            {exp.company}
                                        </h3>
                                        <svg 
                                            className="w-4 h-4 text-neutral-400 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 transition-all duration-200 transform group-hover/link:-translate-y-0.5" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium mb-2">
                                    {exp.title}
                                </p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-4">
                                    {exp.date}
                                </p>
                                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {exp.skills?.map((skill, skillIdx) => (
                                        <TechTooltip
                                            key={skillIdx}
                                            items={[
                                                {
                                                    id: skillIdx + 1,
                                                    name: skill.name,
                                                    designation: skill.name,
                                                    icon: skill.icon
                                                }
                                            ]}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0 p-3 bg-white dark:bg-neutral-800 rounded-2xl">
                                <Image
                                    src={exp.img}
                                    alt={exp.img_alt}
                                    fill
                                    className="object-contain p-2"
                                    sizes="(max-width: 128px) 100vw, (max-width: 256px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}