import { notFound } from "next/navigation";
import Link from "next/link";
import "./page.css"

interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    city: string;
  };
}

interface Todo{
    id: number,
    title: string,
    completed: boolean,
    userId: number;
}

async function getUser(id: string): Promise<User | null> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();

}


async function getTodos(id: string): Promise<Todo[]>{
    const res= await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
    
    if (!res.ok) {
        throw new Error("Failed to fetch todos");
    }

    return res.json();
}


export default async function UserDetails({
  params,
}: {
  params: { id: string };
}) {
  const {id} = await params;
  const user = await getUser(id);
  const todos = await getTodos(id);
  if (!user) {
    notFound();
  }

  return (
    <div className="detailsContainer">
    <div className="detailsCard">
      <h1 className="detailsHeading">User Details</h1>

      <p className="infoText">Name: {user.name}</p>
      <p className="infoText">Username: {user.username}</p>
      <p className="infoText">Email: {user.email}</p>
      <p className="infoText">Phone: {user.phone}</p>
      <p className="infoText">Website: {user.website}</p>
      <p className="infoText">
        Address: {user.address.street}, {user.address.city}
      </p>
    </div>

    <div className="todoSection">
      <h2 className="todoHeading">Todo List</h2>

      {todos.map((todo) => (
        <div key={todo.id} className="todoCard">
          <p className="todoText">
            {todo.completed ? "Completed: " : "Pending: "}
            {todo.title}
          </p>

          <Link
            href={`/todos/${todo.id}`}
            className="todoButton"
          >
            View Todo Details
          </Link>
        </div>
      ))}
    </div>
  </div>
  )
}