"use client";
import { motion } from "framer-motion";
import React from "react";
export const MotionDiv = (props: React.ComponentProps<typeof motion.div>) => {
    return <motion.div {...props}>{props.children}</motion.div>;
}                   