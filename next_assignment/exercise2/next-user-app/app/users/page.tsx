import Link from "next/link";
import "./page.css";

interface User {
  id: number;
  name: string;
}

async function getUsers(): Promise<User[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!res.ok) {
    throw new Error("Testing error page");
  }

  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="pageContainer">
      <h1 className="heading">Users List</h1>

      {users.map((user) => (
        <div key={user.id} className="card">
          <p className="userId">User Id: {user.id}</p>
          <p className="userName">User Name: {user.name}</p>

          <Link
            href={`/users/${user.id}`}
            className="button"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}