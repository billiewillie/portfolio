'use client'

import {Home, BriefcaseBusiness, Newspaper} from 'lucide-react'
import {FC} from 'react'
import {usePathname} from 'next/navigation'
import TransitionLink from "@/components/ui/TransitionLink";

type NavigationItem = {
    icon: FC
    link: string
    name: string
}

const navigation: NavigationItem[] = [
    {
        icon: Home,
        link: '/',
        name: 'Главная'
    },
    {
        icon: BriefcaseBusiness,
        link: '/portfolio',
        name: 'Проекты'
    },
    {
        icon: Newspaper,
        link: '/blog',
        name: 'Блог'
    }
]

export default function MobileNav() {
    const pathname = usePathname()

    return (
        <nav className="flex-center fixed bottom-0 left-0 right-0 z-50 w-full md:hidden">
            <ul
                className="flex w-full justify-evenly rounded-t-3xl border-t-2 border-black-700 bg-backdrop text-text-secondary shadow backdrop-blur-md">
                {
                    navigation.map((item) => {
                        const isActive = item.link === pathname
                        return (
                            <li
                                key={item.name}
                                className="p-4 flex-grow">
                                <TransitionLink
                                    href={item.link}
                                    className={`flex flex-col items-center justify-center gap-1 ${isActive ? 'text-accent' : 'text-primary'}`}>
                                    <item.icon size={18}/>
                                    <span className="text-xs">
									{item.name}
									</span>
                                </TransitionLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}