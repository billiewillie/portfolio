"use client";

import {Post, posts} from "@/data/posts";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {portfolio, Project} from "@/data/portfolio";

export default function Thumbnail() {
    let post: Post | undefined
    let project: Project | undefined
    const category = usePathname().split("/")[1];
    const pathname = usePathname().split("/")[2];
    if (category === "blog") {
        post = posts.find((p: Post) => p.slug === pathname);
    } else {
        project = portfolio.find((p: Project) => p.slug === pathname);
    }
    return (
        <div className="h-[250px] md:h-[500px] mb-10 overflow-hidden rounded-lg relative flex place-items-center">
            {
                category === "blog"
                && post
                && <Image
                    src={post.thumbnail}
                    alt={post.title}
                    className="object-cover !relative"
                    fill
                    sizes="100vh"/>
            }
            {
                category === "portfolio"
                && project
                && <Image
                    src={project.image}
                    alt={project.name}
                    className="object-cover !relative"
                    sizes="100vh"
                    fill/>
            }
        </div>
    );
}