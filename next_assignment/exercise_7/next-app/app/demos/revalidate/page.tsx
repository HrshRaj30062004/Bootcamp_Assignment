import { revalidateTodoData } from "./action";
import styles from "./page.module.css";

async function getData() {
    console.log("Fetching tagged data...");

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
        next: {
            tags: ["todo-data"],
        },
    });

    return res.json();
}

export default async function Page() {
    const data = await getData();

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.header}>Tagged Cache Example</h1>

                <div className={styles.content}>
                    <p><strong>ID:</strong> {data.id}</p>
                    <p><strong>Title:</strong> {data.title}</p>
                </div>

                <form action={revalidateTodoData}>
                    <button className={styles.btn} type="submit">
                        Revalidate Cache
                    </button>
                </form>
            </div>
        </div>
    );
}