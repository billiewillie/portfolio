import {posts} from "@/data/posts";
import Image from "next/image";
import TransitionLink from "@/components/ui/TransitionLink";

export default function BlogPage() {
    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch gap-5">
                {posts.map((p, idx) => (
                    <TransitionLink
                        key={idx}
                        href={`/blog/${p.slug}`}
                        className="p-4 group rounded-lg border border-gray-200 dark:border-gray-700 w-full">
                        {/* image */}
                        <div
                            className="h-60 w-full relative overflow-hidden rounded-md object-cover group-hover:scale-105 duration-300 transition-all">
                            <Image
                                className="object-cover"
                                src={p.thumbnail}
                                alt={`${p.title} - thumbnail`}
                                sizes="100vh"
                                fill/>
                        </div>

                        {/* category */}
                        <p className="text-xs bg-gray-100 dark:bg-gray-700/95 text-blue-700 dark:text-blue-500 font-semibold my-4 w-fit px-2 py-1 rounded-sm">
                            {p.category}
                        </p>

                        {/* title */}
                        <h2 className="text-2xl leading-7 font-bold py-1 line-clamp-2">
                            {p.title}
                        </h2>
                    </TransitionLink>
                ))}
            </div>
        </div>
    );
}