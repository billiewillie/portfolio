export type Project = {
    name: string
    image: string
    link: string
    bgColor: string
    bgCover?: boolean
    year: number,
    typeOfWork: string
    slug: string
}

export const portfolio: Project[] = [
    {
        name: 'Кировский завод',
        image: '/projects/kirovski-zavod.jpg',
        link: '/portfolio/kirovski-zavod',
        bgColor: '#122858',
        year: 2021,
        typeOfWork: 'Разработка сайта',
        slug: 'kirovski-zavod'
    },
    {
        name: 'York Fresh',
        image: '/projects/york-fresh.jpg',
        link: '/portfolio/york-fresh',
        bgColor: '#ffffff',
        year: 2020,
        slug: 'york-fresh',
        typeOfWork: 'Разработка и дизайн'
    },
    {
        name: 'Jumeirah',
        image: '/projects/jumeirah.jpg',
        link: '/portfolio/jumeirah',
        bgColor: '#fff',
        bgCover: true,
        year: 2018,
        slug: 'jumeirah',
        typeOfWork: 'Разработка сайта'
    },
    {
        name: 'Labvision',
        image: '/projects/labvision.jpg',
        link: '/portfolio/labvision',
        bgColor: '#000000',
        bgCover: false,
        year: 2024,
        slug: 'labvision',
        typeOfWork: 'Разработка сайта и дизайн'
    },
    {
        name: 'Bureau21',
        image: '/projects/bureau21.jpg',
        link: '/portfolio/bureau21',
        bgColor: '#ffffff',
        bgCover: false,
        year: 2020,
        slug: 'bureau21',
        typeOfWork: 'Разработка сайта и дизайн'
    },
    {
        name: 'Английская 70',
        image: '/projects/anglyiskaja-70.webp',
        link: '/portfolio/anglyiskaja-70',
        bgColor: '#ffffff',
        bgCover: true,
        year: 2020,
        slug: 'anglyiskaja-70',
        typeOfWork: 'Разработка сайта и дизайн'
    },
];