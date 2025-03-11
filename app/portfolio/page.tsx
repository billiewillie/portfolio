import {portfolio, Project} from "@/data/portfolio";
import Image from "next/image";
import TransitionLink from "@/components/ui/TransitionLink";

export default function PortfolioPage() {

    return (
        <>
            <div className="container">
                <div
                    className={'mb-12 opacity-container grid grid-cols-1 grid-rows-[masonry] gap-y-10 py-md sm:grid-cols-2 sm:gap-x-16 sm:gap-y-0'}>
                    {
                        portfolio.map((project: Project) => (
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
                                            style={{backgroundColor: project.bgColor}}
                                            className={`aspect-3/2 w-full object-center overflow-hidden rounded-3xl`}>
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
            </div>
        </>
    );
}