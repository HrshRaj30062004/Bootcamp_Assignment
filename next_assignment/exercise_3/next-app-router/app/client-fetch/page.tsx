"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Client.module.css"
import { Table } from "../components/StyledTables";

interface User {
  id: number;
  name: string;
}

export default function ClientFetchPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data: User[] = await res.json();
      setUsers(data);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        App Router – Client Side Fetching
      </h1>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}