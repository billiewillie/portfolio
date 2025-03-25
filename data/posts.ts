export type Post = {
    title: string;
    slug: string;
    date: string;
    category: string;
    thumbnail: string;
}

export const posts: Post[] = [
    {
        title: "this в JavaScript",
        slug: "this-v-javascript",
        date: "2025-03-22",
        category: "JavaScript",
        thumbnail: "/blog/this.webp",
    },
    {
        title: "Всплытие и погружение",
        slug: "vsplytie-i-pogruzhenie",
        date: "2025-03-23",
        category: "JavaScript",
        thumbnail: "/blog/vsplytie.webp",
    },
    {
        title: "Event loop",
        slug: "event-loop",
        date: "2025-03-25",
        category: "JavaScript",
        thumbnail: "/blog/event-loop.webp",
    },
];