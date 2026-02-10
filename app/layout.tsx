import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "@/app/globals.css"; 
import Navbar from "@/components/navbar"
import { ViewTransitions } from "next-view-transitions";
import { Footer } from "@/components/navbar/footer";
import { Toaster } from "sonner";
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
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className} antialiased [--pattern-fg:var(--color-neutral-900)]/5 bg-neutral-100 dark:bg-neutral-700 `}
        >
          <Toaster position="top-center"/>
          <Navbar />
          {children}
          <Footer/>
        </body>
      </html>
    </ViewTransitions>
  );
}
