'use client'

import {usePathname, useRouter} from "next/navigation";
import {animationPageOut} from "@/app/utils/animationPage";
import {ReactNode} from "react";

type Props = {
    href: string,
    children: ReactNode,
    className?: string
}

export default function TransitionLink({href, children, className}: Props) {
    const router = useRouter()
    const pathname = usePathname()

    function handleClick() {
        console.log(pathname)
        if (pathname !== href) {
            animationPageOut(href, router)
        }
    }

    return (
        <div
            onClick={handleClick}
            className={`${className} cursor-pointer`}>
            {children}
        </div>
    )
}