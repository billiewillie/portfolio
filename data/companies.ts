export type Company = {
    name: string
    bgColor: 'bg-white' | 'bg-black'
    typeOfWork: string
    link: string
    image: string
    description: string[]
    dates: string
}

export const companies: Company[] = [
    {
        name: 'Биолайн',
        typeOfWork: 'Разработчик сайтов и дизайнер',
        bgColor: 'bg-white',
        link: 'https://bioline.ru/',
        image: '/experience/bioline.svg',
        dates: 'март 2023 - февраль 2025',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ]
    },
    {
        name: 'Studia 54',
        bgColor: 'bg-black',
        typeOfWork: 'Разработчик сайтов',
        link: 'https://studia-54.com',
        image: '/experience/studia-54.svg',
        dates: 'март 2022 - февраль 2023',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ]	},
    {
        name: 'Uno agency',
        bgColor: 'bg-black',
        typeOfWork: 'Разработчик сайтов',
        link: 'https://uno-agency.ru/',
        image: '/experience/uno.svg',
        dates: 'июнь 2018 - февраль 2020',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ]	},
    {
        name: 'Adcombo',
        bgColor: 'bg-white',
        typeOfWork: 'Разработчик сайтов',
        link: 'https://adcombo.com/',
        image: '/experience/adcombo.svg',
        dates: 'октябрь 2016 - апрель 2018',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ]	},
    {
        name: 'Jumeirah',
        bgColor: 'bg-white',
        typeOfWork: 'Разработчик сайтов',
        link: 'https://www.jumeirah.com',
        image: '/experience/jumeirah.svg',
        dates: 'август 2012 - июль 2014',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ]
    },
];