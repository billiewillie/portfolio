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
        <div className="h-[250px] md:h-[500px] mb-10 overflow-hidden rounded-lg relative">
            <Image
                src={category === "blog" ? post?.thumbnail : project?.image}
                alt={category === "blog" ? post?.title : project?.name}
                className="object-cover"
                fill
                sizes="100vh"/>
        </div>
    );
}