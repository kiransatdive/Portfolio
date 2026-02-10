import path from "path"
import { promises as fs } from "fs"
import { compileMDX } from "next-mdx-remote/rsc";

export type Frontmatter = {
    title: string;
    date: string;
    description: string;
    image: string;
}

export const getSingleBlog = async (slug: string) => {
    try {
        const singleBlog = await fs.readFile(
            path.join(process.cwd(), "data", `${slug}.mdx`), "utf-8");
        if (!singleBlog) {
            return null;
        }
        const { frontmatter, content } = await compileMDX<{ title: string; date: string; description: string; image: string }>({
            source: singleBlog,
            options: { parseFrontmatter: true }
        });
        return { frontmatter: frontmatter as Frontmatter, content, slug };
    } catch (error) {
        console.error(`Error reading blog file for slug "${slug}":`, error);
        return null;
    }
}

export const getBlogs = async () => {
    const dirPath = path.join(process.cwd(), "data");
    const files = (await fs.readdir(dirPath)).filter(file => file.endsWith(".mdx"));

    const allBlogs = await Promise.all(files.map(async (file) => {
        const slug = file.replace('.mdx', "");
        const frontmatter = await getBLogFrontMatterBySlug(slug);
        return { slug, frontmatter };
    }));

    return allBlogs.filter((blog): blog is { slug: string; frontmatter: Frontmatter } => blog.frontmatter !== null);
}

export const getBLogFrontMatterBySlug = async (slug: string) => {
    try {
        const singleBlog = await fs.readFile(path.join(process.cwd(), "data", `${slug}.mdx`), "utf-8");

        if (!singleBlog) {
            return null;
        }

        const { frontmatter } = await compileMDX<Frontmatter>({
            source: singleBlog,
            options: { parseFrontmatter: true }
        })
        return frontmatter;
    } catch (error) {
        console.error(`Error reading frontmatter for slug "${slug}":`, error);
        return null;
    }
}