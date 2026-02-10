"use client";
import { easeInOut, motion } from "framer-motion"

export const SectionHeading = ({
    children,
    delay = 0,
    className = "",
}: {
    children: string;
    delay?: number;
    className?: string;
}) => {
    return (
        <h2 className={`text-sm mt-4 font-normal relative  w-fit max-w-lg  md:text-sm  ${className}`}>

            <Background />
            {children.split(" ").map((word, idx) => (
                <motion.span
                    initial={{ opacity: 0, y: 5, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: delay + idx * 0.1, duration: 0.3, ease: easeInOut }}
                    key={word + idx}
                    viewport={{ once: true }}
                    className="inline-block"
                >
                    {word}&nbsp;
                </motion.span>
            ))}
        </h2>
    )
}


const Background = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,

            }}
            whileInView={{
                opacity: 1,

            }}
            transition={{
                duration: 0.3,
                ease: easeInOut,
                delay: 0.1,
            }}
            className="absolute inset-0 h-full w-full scale-{1.04} bg-neutral-100">
            <div className="absolute animate-pulse -top-px -left-px h-1 w-1 rounded-full bg-neutral-200 "> </div>
            <div className="absolute animate-pulse -top-px -right-px h-1 w-1 rounded-full bg-neutral-200 "> </div>
            <div className="absolute animate-pulse -bottom-px -left-px h-1 w-1 rounded-full bg-neutral-200 "> </div>
            <div className="absolute animate-pulse -right-px -bottom-px h-1 w-1 rounded-full bg-neutral-200 "> </div>

        </motion.div>
    )
}