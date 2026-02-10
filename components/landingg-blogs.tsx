import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import { SectionHeading } from "./section-heading";
import { MotionDiv } from "./motion-div";
import type { Frontmatter } from "@/utils/mdx";

export const LandingBlogs = async () => {
    const allBlogs: { slug: string; frontmatter: Frontmatter }[] = await getBlogs();

    const truncate = (str: string, length: number) => {
        return str.length > length ? str.substring(0, length) + "..." : str;
    };

    return (
        <div className="py-4">
            <SectionHeading delay={0.4} className="mb-4">
                I am writing things down.
            </SectionHeading>
            <div className="grid gap-6 py-4">
                {allBlogs.slice(0, 3).map((blog, idx) => (
                    <MotionDiv
                        key={blog.slug}
                        initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeInOut" }}>
                        <Link href={`/blog/${blog.slug}`} className="group block no-underline">
                            <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl  hover:shadow-sm transition-all duration-300 border border-neutral-100 overflow-hidden hover:-translate-y-1">
                                <div className="p-6">
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
                                                {truncate(blog.frontmatter.description || "", 120)}
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
                    </MotionDiv>
                ))}
            </div>
        </div>

    )
}