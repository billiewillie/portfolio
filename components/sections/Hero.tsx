'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Image from 'next/image'
import { Hand } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<section className="mb-24">
			<div className="container flex flex-col items-start lg:items-center overflow-x-hidden sm:flex-row gap-8 md:gap-16">
				<div className="relative w-full sm:w-1/3">
					<div className="overflow-hidden rounded-b-full">
						<Image
							src="/me.webp"
							priority={true}
							width={384}
							height={554}
							className="transition duration-300 hover:scale-[1.015] h-[440px] xl:h-auto w-full object-cover object-center"
							alt="Вадим Белинович" />
					</div>
				</div>
				<div className="w-full sm:w-2/3">
					<div
						data-aos="fade"
						data-aos-offset="0"
						data-aos-duration="300"
						data-aos-easing="ease"
						data-aos-delay="0">
						<p className="mb-6 flex items-center gap-2 text-primary">
							<span className="wave">
								<Hand
									size={24}
									color="#b5ff6d" />
							</span>
							<span>Здравствуйте! Меня зовут Вадим</span>
						</p>
					</div>
					<h1 className="text-[6.5vw] md:~text-3xl/5xl font-bold mb-6 leading-[1.5]">
						Я <span className="text-accent">Fullstack&#8209;разработчик</span><br />и<span
						className={'w-1 inline-flex'} /> Web&#8209;дизайнер
					</h1>
					<p className={'text-balance text-base text-secondary mb-8'}>
						Я сотрудничаю с компаниями по всему миру, создавая привлекательные и многофункциональные приложения, которые
						способствуют достижению результатов и целей бизнеса.
					</p>
					<Link
						href="/Белинович%20Вадим%20Игоревич.pdf"
						target="_blank"
						className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:opacity-90 text-black px-8 py-3">
						Моё резюме
					</Link>
				</div>
			</div>
		</section>
	)
}