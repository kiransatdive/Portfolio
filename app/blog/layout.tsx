import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import { Container } from "@/components/container";
const inter=Inter({
 subsets:["latin"],
 weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: " Freelancer Portfolio website ",
  description: "A perfect portfolio website that you need to have for your business or personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex justify-start items-start">
      <Container className="prose min-h-screen px-12 md:pt-20 md:pb-10 relative">
        <div className="absolute top-0 right-0 h-full w-8 border-x border-x-[var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <div className="absolute top-0 left-0 h-full w-8 border-x border-x-[var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        {children} 
      </Container>
    </div>
  );
}
