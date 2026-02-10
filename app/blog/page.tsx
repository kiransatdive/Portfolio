import { Container } from "@/components/container";
import React from "react";
import { Metadata } from "next";
import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";
import { LinkPreview } from "@/components/ui/link-preview";

const getPreviewUrl = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('react')) return 'https://react.dev';
    if (lowerTitle.includes('nextjs')) return 'https://nextjs.org';
    if (lowerTitle.includes('javascript')) return 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
    if (lowerTitle.includes('css')) return 'https://developer.mozilla.org/en-US/docs/Web/CSS';
    if (lowerTitle.includes('html')) return 'https://developer.mozilla.org/en-US/docs/Web/HTML';
    if (lowerTitle.includes('node')) return 'https://nodejs.org';
    if (lowerTitle.includes('tailwind')) return 'https://tailwindcss.com';
    return 'https://github.com';
};

const highlightKeywords = (title: string) => {
    const keywords = [
        { word: 'react', color: 'text-blue-600' },
        { word: 'nextjs', color: 'text-gray-900' },
        { word: 'javascript', color: 'text-yellow-600' },
        { word: 'css', color: 'text-blue-500' },
        { word: 'html', color: 'text-orange-600' },
        { word: 'node', color: 'text-green-600' },
        { word: 'tailwind', color: 'text-cyan-600' }
    ];

    let highlightedTitle = title;
    keywords.forEach(({ word, color }) => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        highlightedTitle = highlightedTitle.replace(regex, `<span class="${color} font-bold">${word}</span>`);
    });

    return highlightedTitle;
};



export const metadata: Metadata = {
  title: "All Blogs-Kiran Satdive",
  description: "All my general wisdom and thoughts",
};


export default async function BlogsPage() {
  const allBlogs = await getBlogs();
  console.log("allBlogs", allBlogs);

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  }
  return (
    <div className="flex min-h-screen items-start ">
      <Container className="min-h-screen px-8 md:pt-5 md:pb-10 ">
        <Heading>
          All Blogs
        </Heading>
        <SubHeading>
          I am Software Engineer with a passion for building scalable and
          efficient systems.I am currently as a software Engineer as Freelancer.{" "}
        </SubHeading>
        <div className="my-4">
          <div className="grid gap-2">
            {allBlogs.map((blog, idx) => (
              <Link href={`/blog/${blog.slug}`} key={blog.slug} className="group block no-underline" style={{ textDecoration: 'none' }}>
                <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl  transition-all duration-300 border border-neutral-100 hover:-translate-y-1">
                  <div className="p-2">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <LinkPreview url={getPreviewUrl(blog.frontmatter.title)} width={300} height={200} className="relative z-50">
                          <h2 
                            className="text-xl font-bold leading-tight mb-2 transition-colors duration-200 text-neutral-900 group-hover:opacity-80"
                            dangerouslySetInnerHTML={{ __html: highlightKeywords(blog.frontmatter.title) }}
                          />
                        </LinkPreview>
                        <div className="flex items-center text-sm text-neutral-500 mb-3">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {new Date(blog.frontmatter.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                          })}
                        </div>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          {blog.frontmatter.description || ""}
                        </p>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
