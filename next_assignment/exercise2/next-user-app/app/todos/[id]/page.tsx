import { notFound } from "next/navigation";
import Link from "next/link";
import "./page.css"

interface Todo{
    id: number,
    title: string,
    completed: boolean,
    userId: number;
}



async function getTodos(id: string): Promise<Todo | null>{
    const res= await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    
    if (!res.ok) {
        return null;
    }

    return res.json();
}


export default async function TodoDetails({
  params,
}: {
  params: { id: string };
}) {
  const {id} = await params;
  const todo = await getTodos(id);
  if (!todo) {
    notFound();
  }

  return (
    <div className="todoDetailsContainer">
    <div className="todoDetailsCard">
      <h1 className="todoDetailsHeading">Todo Details</h1>

      <p className="todoInfo">ID: {todo.id}</p>
      <p className="todoInfo">Title: {todo.title}</p>

      <p
        className={`todoInfo ${
          todo.completed ? "statusCompleted" : "statusPending"
        }`}
      >
        {todo.completed ? "Completed" : "Pending"}
      </p>

      <p className="todoInfo">User ID: {todo.userId}</p>

      <Link
        href={`/users/${todo.userId}`}
        className="backButton"
      >
        Back to User
      </Link>
    </div>
  </div>
  );
}