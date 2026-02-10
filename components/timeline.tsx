"use client";
import React, { use, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Data = {
  title: string,
  content: {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
  }[];
};

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const data: Data[] = [
    {
      title: "2025",
      content: [
        {
          title: "Starting a Job as a Backend Developer",
          description: "Began professional career as a backend developer, responsible for designing and implementing server-side architectures, developing RESTful APIs, managing databases, and ensuring system scalability and performance."
        },
        {
          title: "Hacktoberfest Contributor and Winner",
          description: "Contributed to open source projects during Hacktoberfest and was recognized as a winner for valuable contributions to the developer community."
        }
      ]
    },
    {
      title: "2024",
      content: [
        {
          title: "Completing Engineering Degree",
          description: "Finished my Bachelor's Degree in Computer Science, achieving a 8.31 GPA."
        },
        {
          title: "Completing Java Full Stack Course",
          description: "Finished a comprehensive Java Full Stack Course, enhancing my skills in Java and backend development."
        },

      ]
    },
    {
      title: "2023",
      content: [
        {
          title: "Starting Open Source Projects",
          description: "Began contributing to open source projects and actively learning data structures and algorithms, solidifying my foundational knowledge."
        },
        {
          title: "Learning Data Structures and Algorithms",
          description: "Dedicated time to learning and mastering data structures and algorithms, expanding my problem-solving abilities."
        },
      ]
    },
    {
      title: "2022",
      content: [

        {
          title: "Learning Web Development Course",
          description: "Started learning web development fundamentals, including HTML, CSS, and JavaScript, building the foundation for modern web development."
        }
      ]
    },
    {
      title: "2021",
      content: [

        {
          title: "Started My Engineering Career",
          description: "Began my journey in engineering, laying the foundation for technical skills and professional development."
        }
      ]
    }
  ]
  return (
    <div ref={ref} className="py-10">
      {data.map((year, index) => (
        <div content="px-4 py-1" key={year.title} className="mb-4">
          <motion.h2
            initial={{
              opacity: 0,
              filter: "blur(5px)",

            }}
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            className="shadow-input w-fit rounded-md px-2 py-0.5 font-bold text-black mb:2"
          >{year.title}</motion.h2>
          <div className="flex flex-col gap-4">
            {year.content.map((item, index) => (
              <div key={index} className="pl-4">
                <Step
                  index={index}
                  isInView={isInView}
                >
                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >{item.title}</motion.h3>
                </Step>
                {item.description && (<motion.p
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : -10,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="pt-1 pl-6 text-sm text-neutral-400">{item.description}</motion.p>)}

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
export default Timeline

const Step = ({
  className,
  children,
  index,
  isInView,

}: {
  className?: string,
  children: React.ReactNode,
  index: number,
  isInView: boolean,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: index * 0.2,
      }}
      className={cn("flex item-start gap-2", className)}>
      <IconCircleCheckFilled className="mt-0.5 h-4 w-4 text-neutral-500" />
      {children}
    </motion.div>
  )


}
