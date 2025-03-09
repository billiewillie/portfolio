export type Post = {
    title: string;
    slug: string;
    date: string;
    category: string;
    thumbnail: string;
}

export const posts: Post[] = [
    {
        title: "Abc Efg",
        slug: "abc-efg",
        date: "2024-02-28",
        category: "Blockchain",
        thumbnail: "/app.jpg",
    },
];