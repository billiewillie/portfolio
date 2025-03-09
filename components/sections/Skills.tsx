import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { black } from 'next/dist/lib/picocolors'

type Skill = {
	name: string
	image: string
}

const skills: Skill[] = [
	{
		name: 'CSS',
		image: '/skills/css.svg'
	},
	{
		name: 'Docker',
		image: '/skills/docker.svg'
	},
	{
		name: 'Express',
		image: '/skills/express.svg'
	},
	{
		name: 'Figma',
		image: '/skills/figma.svg'
	},
	{
		name: 'Firebase',
		image: '/skills/firebase.svg'
	},
	{
		name: 'Framer Motion',
		image: '/skills/framermotion.svg'
	},
	{
		name: 'Git',
		image: '/skills/git.svg'
	},
	{
		name: 'HTML',
		image: '/skills/html.svg'
	},
	{
		name: 'JavaScript',
		image: '/skills/javascript.svg'
	},
	{
		name: 'Mongo DB',
		image: '/skills/mongodb.svg'
	},
	{
		name: 'MySQL',
		image: '/skills/mysql.svg'
	},
	{
		name: 'Next JS',
		image: '/skills/next.svg'
	},
	{
		name: 'Node JS',
		image: '/skills/node.svg'
	},
	{
		name: 'PostgreSQL',
		image: '/skills/postgresql.svg'
	},
	{
		name: 'React',
		image: '/skills/react.svg'
	},
	{
		name: 'Redux',
		image: '/skills/redux.svg'
	},
	{
		name: 'TypeScript',
		image: '/skills/typescript.svg'
	},
	{
		name: 'Tailwind CSS',
		image: '/skills/tailwindcss.svg'
	}
]

export default function Skills() {
	return (
		<section className="mb-24 flex border-y border-black-700 overflow-hidden relative">
			<Marquee
				className={'overflow-hidden h-full py-8'}
				gradient={true}
				gradientColor={'#0a0a0a'}
				gradientWidth={'25%'}
				speed={20}
				pauseOnHover={true}>
				{
					skills.map((skill: Skill) => (
						<div
							className="inline-flex w-fit min-w-fit items-center gap-4 mr-4 rounded-full border px-4 py-2 text-sm shadow transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black-800 text-primary dark:bg-black-700"
							key={skill.name}>
							<Image
								width={18}
								height={18}
								alt={skill.name}
								loading={'lazy'}
								src={skill.image} />
							<span>{skill.name}</span>
						</div>
					))
				}
			</Marquee>
			{/*<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-bg-900"></div>*/}
			{/*<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-bg-900"></div>*/}
		</section>
	)
}