import {Instagram, Github} from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className={'flex flex-col gap-y-8 pb-8'}>
            <div>
                <div className="container">
                    <div className="flex flex-col md:flex-row rounded-3xl bg-black-800 p-8 xl:p-12 gap-16 shadow">
                        <div className='flex md:basis-1/2 flex-col items-start gap-8'>
                            <div
                                data-aos="fade"
                                data-aos-offset="0"
                                data-aos-duration="300"
                                data-aos-easing="ease"
                                data-aos-delay="0"
                                data-aos-once="false"
                                className={'flex justify-center'}>
                                <div
                                    className="flex items-center leading-none gap-2 rounded-full bg-[#B5FF6D]/10 px-4 py-2">
                                    <div className="relative flex h-[6px] w-[6px]">
									<span
                                        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                                        <span
                                            className="relative inline-flex h-full w-full rounded-full bg-accent"></span>
                                    </div>
                                    <p className="text-xs text-primary">
                                        Открыт для сотрудничества
                                    </p>
                                </div>
                            </div>
                            <div
                                data-aos="fade"
                                data-aos-offset="0"
                                data-aos-duration="300"
                                data-aos-easing="ease"
                                data-aos-delay="200"
                                data-aos-once="false">
                                <h2
                                    role="heading"
                                    className="text-balance text-3xl max-w-screen-sm font-semibold">
                                    Давайте воплотим вашу следующую большую идею
                                </h2>
                            </div>
                        </div>
                        <div
                            className='md:basis-1/2 flex flex-col items-start gap-4'
                            data-aos="fade"
                            data-aos-offset="0"
                            data-aos-duration="300"
                            data-aos-easing="ease"
                            data-aos-delay="400"
                            data-aos-once="false">
                            <Link
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-background hover:opacity-90 px-4 py-2"
                                href="mailto:vadimbelinovich@gmail.com">
                                Написать на почту
                            </Link>
                            <Link
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-background hover:opacity-90 px-4 py-2 transition-opacity"
                                href="tg://resolve?domain=billie_willie">
                                Написать в телеграм
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container flex justify-between">
                    <p className="text-center text-sm text-secondary sm:mb-0 sm:text-left">
                        © {year} Вадим Белинович
                    </p>
                    <div className={'flex items-center opacity-container gap-8 text-secondary'}>
                        <Link
                            aria-label="GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/billiewillie">
                            <Github
                                size={20}
                                className={'opacity-container-child'}/>
                        </Link>
                        <Link
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/vadim.belinovich">
                            <Instagram
                                size={20}
                                className={'opacity-container-child'}/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}