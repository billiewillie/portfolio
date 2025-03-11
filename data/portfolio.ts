export type Project = {
    name: string
    image: string
    link: string
    bgColor: string
    bgCover?: boolean
    year: number,
    typeOfWork: string
}

export const portfolio: Project[] = [
    {
        name: 'Кировский завод',
        image: '/projects/kirovski-zavod.jpg',
        link: '/portfolio/kirovski-zavod',
        bgColor: '#122858',
        year: 2021,
        typeOfWork: 'Разработка сайта'
    },
    {
        name: 'York Fresh',
        image: '/projects/york-fresh.jpg',
        link: '/portfolio/york-fresh',
        bgColor: '#ffffff',
        year: 2020,
        typeOfWork: 'Разработка и дизайн'
    },
    {
        name: 'Jumeirah',
        image: '/projects/jumeirah.jpg',
        link: '/portfolio/jumeirah',
        bgColor: '#fff',
        bgCover: true,
        year: 2018,
        typeOfWork: 'Разработка сайта'
    },
    {
        name: 'Labvision',
        image: '/projects/labvision.jpg',
        link: '/portfolio/labvision',
        bgColor: '#000000',
        bgCover: false,
        year: 2024,
        typeOfWork: 'Разработка сайта и дизайн'
    }
];