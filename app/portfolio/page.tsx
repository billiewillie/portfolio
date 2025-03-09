import {projects} from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {

    return (
        <>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5">
                    {projects.map((p, idx) => (
                        <Link
                            key={idx}
                            href={`/blog/${p.slug}`}
                            className="p-4 group rounded-lg border w-[392px] border-gray-200 dark:border-gray-700">
                            {/* image */}
                            <div
                                className="h-60 w-full relative overflow-hidden rounded-md object-cover group-hover:scale-105 duration-300 transition-all">
                                <Image
                                    src={p.thumbnail}
                                    alt={`${p.title} - thumbnail`}
                                    sizes="100vh"
                                    fill/>
                            </div>

                            {/* title */}
                            <h2 className="text-2xl leading-7 font-bold py-1 line-clamp-2">
                                {p.title}
                            </h2>

                            {/* author and date */}
                            <div className="text-gray-500 flex text-base space-x-10 py-3">
                                <div>{p.date}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}