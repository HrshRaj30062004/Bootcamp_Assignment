import styles from "../../styles/Server.module.css"
import Link from "next/link";

interface Post {
    id: number;
    title: string;
    body: string;
}

export const revalidate = 10;


export async function generateStaticParams() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );

    const posts: Post[] = await res.json();

    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}


export default async function ISRPage({
    params,
}: {
    params: { id: string };
}) {
    const {id} = await params
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    const post: Post = await res.json();

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className="text-2xl font-bold mb-4">
                    App Router – ISR Page
                </h1>

                <p className="mb-2">
                    <strong>ID:</strong> {post.id}
                </p>

                <h2 className="text-xl font-semibold mb-2">
                    {post.title}
                </h2>

                <p className="mb-4">{post.body}</p>

                <Link href="/">
                    <button className="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 text-white px-4 py-2 rounded transition">
                        Home
                    </button>
                </Link>

            </div>
        </div>
    );
}