'use client'

import {Accordion, AccordionItem} from '@szhsin/react-accordion'
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AccentTitle from '@/components/ui/AccentTitle'
import Link from 'next/link'
import Image from 'next/image'
import {companies} from "@/data/companies";
import SplitText from "@/components/ui/SplitText";

export default function Experience() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <section className="mb-32">
            <div className="container flex flex-col gap-12 md:flex-row md:gap-8">
                <div className="top-40 h-fit md:sticky md:w-1/3 flex flex-col gap-4 items-start">
                    <div
                        data-aos="fade"
                        data-aos-offset="0"
                        data-aos-duration="300"
                        data-aos-easing="ease"
                        data-aos-delay="0">
                        <AccentTitle title={'карьера'}/>
                    </div>
                    <SplitText
                        text="Опыт работы"
                        className="text-5xl font-bold !text-left"
                        delay={50}
                        animationFrom={
                            {
                                opacity: 0,
                                transform: 'translate3d(0,50px,0)'
                            }
                        }
                        animationTo={
                            {
                                opacity: 1,
                                transform: 'translate3d(0,0,0)'
                            }
                        }
                        threshold={0.1}
                        rootMargin="-50px"/>
                    <p className='text-secondary'>
                        Я работал с некоторыми из самых известных лидеров в своих отраслях, помогая им создавать первоклассные
                        продукты.
                    </p>
                </div>
                <div
                    className="flex flex-col items-center md:w-2/3"
                    data-aos="fade"
                    data-aos-offset="0"
                    data-aos-duration="300"
                    data-aos-easing="ease"
                    data-aos-delay="0">
                    <Accordion
                        className="w-full"
                        transition
                        transitionTimeout={400}>
                        {
                            companies.map((company) => (
                                <AccordionItem
                                    className={'pb-4 border-b border-black-700 mb-4 last:mb-0'}
                                    key={company.name}
                                    header={
                                        <div className={'flex gap-x-4 items-start'}>
                                            <div
                                                className={`logo flex rounded-full w-10 h-10 overflow-hidden ${company.bgColor === 'bg-white' ? 'bg-white' : 'bg-black'}`}>
                                                <Image
                                                    src={company.image}
                                                    alt={company.name}
                                                    width={40}
                                                    height={40}/>
                                            </div>
                                            <div className="flex flex-col gap-y-1 items-start flex-auto">
                                                <h3 className='leading-none'>Веб разработчик</h3>
                                                <div className={'flex justify-between w-full'}>
                                                    <Link
                                                        className={'text-secondary underline-offset-4 hover:underline'}
                                                        href={company.link}
                                                        target={'_blank'}>
                                                        {company.name}
                                                    </Link>
                                                    <p className="text-secondary text-xs">{company.dates}</p>
                                                </div>
                                            </div>
                                        </div>
                                    }>
                                    <ul className={'pl-4 list-disc pt-4'}>
                                        {
                                            company.description.map((item: string, index) => (

                                                <li
                                                    key={index}
                                                    className="text-secondary">
                                                    <p>{item}</p>
                                                </li>

                                            ))
                                        }
                                    </ul>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}