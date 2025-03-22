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
];