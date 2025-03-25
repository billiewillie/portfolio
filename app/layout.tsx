import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import ReactLenis from "lenis/react";
import MobileNav from "@/components/MobileNav";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
    variable: '--montserrat',
    subsets: ['latin', 'cyrillic']
})

export const metadata: Metadata = {
    title: 'Web-разработчик Вадим Белинович',
    description: 'Персональный сайт web-разработчика Вадима Белиновича',
}

export default function RootLayout(
    {children}: Readonly<{ children: ReactNode }>
) {
    return (
        <html lang="ru">
        <body className={`${montserrat.variable} antialiased relative flex flex-col`}>
        <ReactLenis root>
            <Header/>
            {children}
            <MobileNav/>
            <Footer/>
        </ReactLenis>
        </body>
        </html>
    );
}
