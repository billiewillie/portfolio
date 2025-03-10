'use client'

import React, {useEffect, useState, FC} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AccentTitle from '@/components/ui/AccentTitle'
import Image from 'next/image'
import {Accordion, AccordionItem} from '@szhsin/react-accordion'
import {ChevronDown, Monitor, Database, PenTool} from 'lucide-react'
import SplitText from '@/components/ui/SplitText'

type Speciality = {
    id: number
    icon: FC<{width: number, height: number}>
    name: string
    description: string
    image: string
}

const specialities: Speciality[] = [
    {
        id: 1,
        icon: Monitor,
        name: 'Frontend',
        description: 'Разработка адаптивных веб сайтов. Обеспечение удобного интерфейса, который адаптируется к любому устройству и размеру экрана, что делает взаимодействие с сайтом максимально комфортным для пользователей.',
        image: '/specialities/frontend.webp'
    },
    {
        id: 2,
        icon: Database,
        name: 'Backend',
        description: 'Создание серверной части веб-приложений, отвечающих за безопасную обработку данных, логику работы сайта и взаимодействие с базой данных.',
        image: '/specialities/backend.webp'
    },
    {
        id: 3,
        icon: PenTool,
        name: 'Web Design',
        description: 'Создание удобных пользовательских интерфейсов, определяющих взаимодействие аудитории с продуктом.',
        image: '/specialities/design.webp'
    }
]

export default function Experience() {
    const [activeTab, setActiveTab] = useState(1)

    function handleTabClick(id: number) {
        setActiveTab(id)
    }

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <section className="mb-32">
            <div className="container flex flex-col gap-8 md:flex-row sm:gap-x-16">
                <div className={'flex flex-col md:basis-1/2 items-start gap-4'}>
                    <AccentTitle title={'Моя специализация'}/>
                    <SplitText
                        text="Экспертные навыки"
                        className="text-5xl font-bold mb-8 !text-left"
                        delay={50}
                        animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)'}}
                        animationTo={{opacity: 1, transform: 'translate3d(0,0,0)'}}
                        threshold={0.1}
                        rootMargin="-50px"/>
                    <div className="flex flex-col items-center w-full">
                        <Accordion
                            className="w-full"
                            transition
                            transitionTimeout={400}>
                            {
                                specialities.map((speciality: Speciality) => (
                                    <AccordionItem
                                        onClick={() => handleTabClick(speciality.id)}
                                        className={'flex flex-col mb-4 rounded-2xl border border-black-700 bg-black-800 last:mb-0'}
                                        itemKey={`Item-${speciality.id}`}
                                        key={speciality.name}
                                        header={
                                            <div
                                                data-aos="fade"
                                                data-aos-offset="0"
                                                data-aos-duration="300"
                                                data-aos-easing="ease"
                                                data-aos-delay="0"
                                                className={'flex gap-4 p-4 items-center leading-none'}>
                                                <speciality.icon
                                                    width={18}
                                                    height={18}/>
                                                <div className="flex flex-auto">
                                                    <h3>{speciality.name}</h3>
                                                </div>
                                                <ChevronDown
                                                    width={18}
                                                    height={18}
                                                    className="arrow transition-transform"/>
                                            </div>
                                        }>
                                        <p className={'text-secondary px-4 pb-4'}>
                                            {speciality.description}
                                        </p>
                                    </AccordionItem>
                                ))
                            }
                        </Accordion>
                    </div>
                </div>
                <div
                    className={'flex flex-col md:basis-1/2 group relative h-[200px] md:h-auto overflow-hidden rounded-3xl bg-black-800'}>
                    {specialities.map((speciality: Speciality) => (
                        <Image
                            className={`absolute top-0 left-0 h-full w-full transition duration-300 group-hover:scale-[1.015]`}
                            alt={speciality.name}
                            key={speciality.name}
                            src={speciality.image}
                            loading={'lazy'}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                opacity: activeTab === speciality.id ? 1 : 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}