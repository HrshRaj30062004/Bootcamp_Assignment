import { GetServerSideProps } from "next";
import styles from "../../styles/Server.module.css";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  user: User;
}

export default function UserPage({ user }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className="text-2xl font-bold mb-4">
          Server Side Rendered User
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
        <button className="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 text-white px-4 py-2 rounded transition">
          Home
        </button>
        </Link>
        
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { id } = await context.params as { id: string };
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const user: User = await res.json();

  return {
    props: {
      user
    },
  };
};