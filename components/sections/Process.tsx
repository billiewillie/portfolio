'use client'

import {BrainCircuit, PenLine, PencilRuler, CodeXml, ShieldCheck} from 'lucide-react'
import {FC, useEffect, useRef, useState} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AccentTitle from '@/components/ui/AccentTitle'
import SplitText from '@/components/ui/SplitText'
import {motion, useScroll} from 'motion/react'
import {IconProps} from "@/types";

type ProcessItem = {
    title: string
    text: string
    icon: FC<IconProps>
}

const processItems: ProcessItem[] = [
    {
        title: 'Стратегия',
        text: 'Чтобы создать что‑то потрясающее, сначала нужно обсудить детали. Планирование очень важно.',
        icon: BrainCircuit
    },
    {
        title: 'Каркас проекта',
        text: 'После проработки деталей веб‑сайта будет легко изложить идеи на бумаге.',
        icon: PenLine
    },
    {
        title: 'Дизайн',
        text: 'Самое увлекательное - это вдохнуть жизнь в каркас и воплотить его в реальность.',
        icon: PencilRuler
    },
    {
        title: 'Разработка',
        text: 'После принятия дизайна, его нужно оживить и напольнить функциональностью. Успех проекта зависит от качества разработки.',
        icon: CodeXml
    },
    {
        title: 'Проверка качества',
        text: 'На качество веб‑сайта влияют такие факторы, как скорость его загрузки, SEO (поисковая оптимизация), оптимизация файлов и другие параметры.',
        icon: ShieldCheck
    }
]

export default function Process() {
    const [progress, setProgress] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['130% end', 'start 30%']
    })
    const [elShift, setElShift] = useState(0)

    useEffect(() => {
        if (ref.current && ref.current.parentElement) {
            setElShift(ref.current.getBoundingClientRect().width - ref.current.parentElement.getBoundingClientRect().width)
        }
        document.addEventListener('scroll', () => {
            setProgress(scrollYProgress.get())
        })
        AOS.init()
        return () => {
            document.removeEventListener('scroll', () => {
                setProgress(scrollYProgress.get())
            })
        }
    }, [setElShift, scrollYProgress])

    return (
        <section className="mb-32">
            <div className="container">
                <div className="flex flex-col items-start gap-4 mb-8 min-h-[1px]">
                    <AccentTitle title={'Как создается сайт'}/>
                    <SplitText
                        text="Мой процесс работы"
                        className="text-5xl font-bold !text-left"
                        delay={30}
                        animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)'}}
                        animationTo={{opacity: 1, transform: 'translate3d(0,0,0)'}}
                        threshold={0.1}
                        rootMargin="-50px"/>
                    <p className={'text-secondary'}>
                        Мой процесс создания сайта можно разделить на несколько ступеней.
                    </p>
                </div>
                <div className="h-[300px] relative">
                    <div className="relative h-full overflow-hidden">
                        <motion.div
                            ref={ref}
                            style={{
                                position: 'absolute',
                                x: -progress * elShift
                            }}
                            className="left-0 top-0 flex gap-4">
                            {
                                processItems.map((item, index) => (
                                    <div
                                        className="w-full rounded-3xl border border-bg-700 p-6 min-w-[300px]"
                                        key={index}>
                                        <div
                                            data-aos="fade"
                                            data-aos-offset="0"
                                            data-aos-duration="300"
                                            data-aos-easing="ease"
                                            data-aos-delay="0">
                                            <div
                                                className="mb-4 w-fit rounded-full border border-bg-600 bg-bg-700 p-4 text-accent">
                                                <item.icon size={18}/>
                                            </div>
                                        </div>
                                        <div
                                            data-aos="fade"
                                            data-aos-offset="0"
                                            data-aos-duration="300"
                                            data-aos-easing="ease"
                                            data-aos-delay="200">
                                            <h5 className="mb-2">0{index + 1}. {item.title}</h5>
                                        </div>
                                        <div
                                            data-aos="fade"
                                            data-aos-offset="0"
                                            data-aos-duration="300"
                                            data-aos-easing="ease"
                                            data-aos-delay="400">
                                            <p className='text-secondary'>{item.text}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}