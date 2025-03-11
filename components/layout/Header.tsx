'use client'

import { Logo } from '@/components/ui/Logo'
import { Navigation } from '@/components/Navigation'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

export default function Header() {
    const ref = useRef(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
        document.addEventListener('scroll', () => {
            if (window.scrollY > 20 && window.innerWidth > 1024) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        })
        return () => {
            document.removeEventListener('scroll', () => {})
        }
    }, [])

    return (
        <header
            className={`flex sticky transition-all duration-1000 top-0 left-0 right-0 z-50 w-full px-0 pt-4 mb-12 ${isLoaded ? 'translate-y-0' : '-translate-y-16'}`}>
            <div className="container relative flex justify-center h-[28px]">
                <motion.nav
                    ref={ref}
                    style={{
                        position: 'absolute',
                        outline: `${isScrolled ? '1px solid rgb(25, 25, 32)' : 'rgb(25, 25, 32, 0)'}`,
                        maxWidth: `${isScrolled ? '50%' : '100%'}`,
                        backdropFilter: `${isScrolled ? 'blur(12px)' : 'blur(0px)'}`,
                    }}
                    className="flex w-full h-[42px] items-center justify-between rounded-full transition-all duration-500 px-4 md:px-8 lg:bg-backdrop">
                    <Logo />
                    <Navigation />
                </motion.nav>
            </div>
        </header>
    )
}