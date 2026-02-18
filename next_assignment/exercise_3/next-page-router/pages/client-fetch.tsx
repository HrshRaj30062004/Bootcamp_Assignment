"use client";

import { useState, useEffect } from "react";
import styles from "../styles/Client.module.css";
import { Table } from "../components/StyledTable";

interface User {
  id: number;
  name: string;
}

export default function Fetch() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data: User[] = await res.json();
      setUsers(data);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={styles.container}>
      <h1>Client Side Fetching</h1>

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