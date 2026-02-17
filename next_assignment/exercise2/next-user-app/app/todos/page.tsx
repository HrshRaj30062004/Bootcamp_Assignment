import "./page.css"


interface Todo {
    id: number,
    title: string,
    completed: boolean,
    userId: number;
}



async function getTodos(): Promise<Todo[]> {

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
}

export default async function TodoList() {
    const todos = await getTodos();

    return (
        <div className="todosContainer">
            <h1 className="todosHeading">Todos List</h1>

            {todos.map((todo) => (
                <div key={todo.id} className="todoCard">
                    <h3 className="todoId">Task Id: {todo.id}</h3>

                    <p className="todoTitle">
                        Task Title: {todo.title}
                    </p>

                    <p
                        className={`todoStatus ${todo.completed ? "completed" : "pending"
                            }`}
                    >
                        {todo.completed ? "Completed" : "Pending"}
                    </p>
                </div>
            ))}
        </div>
    );
}
