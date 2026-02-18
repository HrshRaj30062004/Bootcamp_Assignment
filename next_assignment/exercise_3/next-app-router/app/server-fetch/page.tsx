import styles from "../styles/Server.module.css";
import Link from "next/link";

interface User {
    id: number;
    name: string;
    email: string;
}

export default async function ServerFetchPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1",
        { cache: "no-store" }
    );

    const user: User = await res.json();

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className="text-2xl font-bold mb-4">
                    App Router – Server Component
                </h1>

                <p className="mb-2">
                    <strong>ID:</strong> {user.id}
                </p>

                <p className="mb-2">
                    <strong>Name:</strong> {user.name}
                </p>

                <p className="mb-4">
                    <strong>Email:</strong> {user.email}
                </p>

                <Link href="/">
                    <button className="bg-purple-500 hover:bg-purple-700 focus:ring-2 focus:ring-purple-300 text-white px-4 py-2 rounded transition">
                        Home
                    </button>
                </Link>

            </div>
        </div>
    );
}