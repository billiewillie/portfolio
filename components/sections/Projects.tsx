import AccentTitle from '@/components/ui/AccentTitle'
import Image from 'next/image'
import SplitText from '@/components/ui/SplitText'
import {portfolio, Project} from "@/data/portfolio";
import TransitionLink from "@/components/ui/TransitionLink";

export default function Projects() {
    return (
        <section className="mb-32">
            <div className="container">
                <div className={'flex flex-col items-start gap-4 mb-12'}>
                    <AccentTitle title={'Мои работы'}/>
                    <SplitText
                        text="Проекты"
                        className="text-5xl font-bold"
                        delay={50}
                        animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)'}}
                        animationTo={{opacity: 1, transform: 'translate3d(0,0,0)'}}
                        threshold={0.1}
                        rootMargin="-50px"/>
                    <p className={'text-secondary'}>
                        Здесь представлена подборка работ, демонстрирующая мой опыт и достигнутые результаты.
                    </p>
                </div>
                <div
                    className={'mb-12 opacity-container grid grid-cols-1 grid-rows-[masonry] gap-y-10 py-md sm:grid-cols-2 sm:gap-x-16 sm:gap-y-0'}>
                    {
                        portfolio.slice(0, 4).map((project: Project) => (
                            <div
                                className={'opacity-container-child group h-fit w-full cursor-pointer even:sm:mt-14'}
                                key={project.name}>
                                <TransitionLink href={project.link}>
                                    <div
                                        data-aos="fade"
                                        data-aos-offset="0"
                                        data-aos-duration="300"
                                        data-aos-easing="ease"
                                        data-aos-delay="0">
                                        <div
                                            className={`aspect-3/2 w-full object-center overflow-hidden rounded-3xl`}
                                            style={{backgroundColor: project.bgColor}}>
                                            <Image
                                                className={'transition duration-300 group-hover:scale-[1.015]'}
                                                alt={project.name}
                                                src={project.image}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: `${project.bgCover ? 'cover' : 'contain'}`
                                                }}/>
                                        </div>
                                    </div>
                                    <div
                                        data-aos="fade"
                                        data-aos-offset="0"
                                        data-aos-duration="300"
                                        data-aos-easing="ease"
                                        data-aos-delay="200">
                                        <div className="mt-4 space-y-2">
                                            <h5>{project.name}</h5>
                                            <div className="flex justify-between">
                                                <div className="flex flex-wrap gap-2">
                                                    <p className="text-sm text-secondary">{project.typeOfWork}</p></div>
                                                <p className="text-sm text-secondary">{project.year}</p></div>
                                        </div>
                                    </div>
                                </TransitionLink>
                            </div>
                        ))
                    }
                </div>
                <div
                    className={'flex justify-center'}
                    data-aos="fade"
                    data-aos-offset="0"
                    data-aos-duration="300"
                    data-aos-easing="ease"
                    data-aos-delay="0">
                    <TransitionLink
                        href="/portfolio"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:opacity-90 text-black px-8 py-3">
                        Все работы
                    </TransitionLink>
                </div>
            </div>
        </section>
    )
}