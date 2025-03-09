'use client'

import {ReactNode, useEffect} from "react";
import {animationPage} from "@/app/utils/animationPage";

export default function Template({children}: { children: ReactNode }) {

    useEffect(() => {
        animationPage()
    }, []);
    return (
        <main
            id="main"
            className={`revealFx hideRevealFx`}>
            <div
                id='mainInner'
                className='relative flex w-full flex-col min-h-[100dvh] leaveFx hideLeaveFx'>
                {children}
            </div>
        </main>
    )
}