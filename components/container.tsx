import React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "max-w-4xl mx-auto w-full px-10  bg-white dark:bg-black relative ",
        className
      )}
    >
      {children}
    </div>
  );
};
