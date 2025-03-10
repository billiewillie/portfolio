'use client'

import { useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AccentTitle from '@/components/ui/AccentTitle'
import revealSpans from '@/app/utils/revealSpans'

export default function Experience() {
	const text = 'Моя главная страсть — это создание решений, которые помогают людям решать их повседневные задачи. Будь то удобное мобильное приложение, сайт или сложная система автоматизации процессов. Я стремлюсь к тому, чтобы результат моей работы делал жизнь пользователей проще и удобнее.'

	const textRef = useRef<HTMLParagraphElement>(null)


	useEffect(() => {
        const spans = [...document.querySelectorAll('.reveal-letter')] as HTMLSpanElement[]
		AOS.init()
		window.addEventListener('scroll', () => {
			revealSpans(spans)
		})
		revealSpans(spans)
	})
	return (
		<section className="mb-32">
			<div className="container flex flex-col items-center gap-4">
				<AccentTitle title={'О себе'} />
				<div
					data-aos="fade"
					data-aos-offset="0"
					data-aos-delay="150"
					data-aos-duration="300"
					data-aos-easing="ease-in-out-sine">
					<p
						ref={textRef}
						className="text-center text-2xl sm:text-3xl md:text-[2rem] font-bold tracking-wide text-primary">
						{
							text.split('').map((letter, index) => (
								<span
									className={'reveal-letter opacity-10'}
									key={index}>{letter}</span>
							))
						}
					</p>
				</div>
			</div>
		</section>
	)
}