'use client'

import {ReactNode, useEffect} from "react";
import {animationPage} from "@/app/utils/animationPage";
import {usePathname} from "next/navigation";

export default function Template({children}: { children: ReactNode }) {
    const pathname = usePathname()

    useEffect(() => {
        animationPage()
    }, [pathname]);

    return (
        <main
            id="main"
            className='revealFx hideRevealFx'>
            <div
                id='mainInner'
                className='relative flex w-full flex-col min-h-[100dvh] leaveFx hideLeaveFx'>
                {children}
            </div>
        </main>
    )
}