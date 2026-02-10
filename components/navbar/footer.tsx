import { IconBrandGithub, IconBrandX,IconBrandLinkedin } from "@tabler/icons-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Container } from "../container"

export const Footer=()=>{
    return(
        <Container className="flex justify-between px-10 py-3 border-t border-neutral-100 ">
            <p className="text-xs text-neutral-500">Built with love by Kiran Satdive</p>
            <div className="flex items-center justify-center gap-4 text-sm text-neutral-500">
                <Link href="https://x.com/kiran-satdive">
                <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700"/>
                </Link>
                <Link href="https://linkedin.com/in/kiran-satdive">
                <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700"/>
                </Link>
                <Link href="https://github.com/kiran-satdive">
                <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700"/>
                </Link>
            </div>
        </Container>
    )
}