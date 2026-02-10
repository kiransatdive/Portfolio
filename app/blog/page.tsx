import { Container } from "@/components/container";
import React from "react";
import { Metadata } from "next";
import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";



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
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10 ">
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
              <Link href={`/blog/${blog.slug}`} key={blog.slug} className="group block no-underline">
                <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl  transition-all duration-300 border border-neutral-100 overflow-hidden hover:-translate-y-1">
                  <div className="p-2">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-neutral-900 leading-tight mb-2 group-hover:text-primary transition-colors duration-200">
                          {blog.frontmatter.title}
                        </h2>
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
                      {/* <div className="ml-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                          <svg className="w-6 h-6 text-primary group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div> */}
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
