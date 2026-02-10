import { Container } from "@/components/container";
import React from "react";
import { Metadata } from "next";
import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import {getSingleBlog,getBLogFrontMatterBySlug} from "@/utils/mdx";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  
  const frontmatter=await getBLogFrontMatterBySlug((await params).slug);


  if(!frontmatter){
    return {
      title: "Blog not Found",
    };
  }

  return {
    title: frontmatter.title+"by Kiran Satdive",
    description: frontmatter.description,
  };
}


async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>; 
}) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);
  if (!blog) {
    redirect("/blog");
  }
  const {frontmatter, content} = blog;
  console.log(frontmatter);

  return (
    <div>
      <img src={frontmatter.image} alt={frontmatter.title} className=" max-h-96 mb-20 mx-auto mx-rounded-full object-cover max-h-2xl w-full rounded-2xl shadow-xl" />
      
        <div className="prose mx-auto">
          {content}
        </div>
     
    </div>
  );
}

export default SingleBlogPage;
