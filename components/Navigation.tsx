'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import TransitionLink from "@/components/ui/TransitionLink";

type NavigationItem = {
    link: string
    name: string
}

const navigation: NavigationItem[] = [
    {
        link: '/',
        name: 'Главная'
    },
    {
        link: '/portfolio',
        name: 'Проекты'
    },
    {
        link: '/blog',
        name: 'Блог'
    }
]

export function Navigation() {
    const pathname = usePathname()
    return (
        <ul className="hidden gap-6 text-sm text-secondary md:flex">
            {
                navigation.map((item) => {
                        const isActive = item.link === pathname
                        return (
                            <li key={item.name}>
                                <TransitionLink
                                    href={item.link}
                                    className={`${isActive ? 'active-link' : ''} group relative cursor-pointer`}>
                                    <span className="relative inline-flex overflow-hidden">
                                		<div
                                            className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                                			{item.name}
                                		</div>
                                		<div
                                            className="absolute translate-y-[110%] skew-y-12 transform-gpu text-primary transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                                			{item.name}
                                		</div>
                                	</span>
                                </TransitionLink>
                            </li>
                        )
                    }
                )
            }
        </ul>
    )
}