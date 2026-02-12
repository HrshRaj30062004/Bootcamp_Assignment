import React, { useState } from "react";
import './Css_files/Q4.css'
function Q4Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = (e) => {
        e.preventDefault();

        if (todo.trim() === "") return;

        setTodos([...todos, todo]);
        setTodo("");
    };

    const deleteAll = () => {
        setTodos([]);
        setTodo("")
    };

    const deleteTodo = (indexToDelete) => {
        const updatedTodos = todos.filter(
            (value, index) => index !== indexToDelete
        );

        setTodos(updatedTodos);
    };

    return (
        <div className="todo-box">
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    placeholder="Enter todo item..."
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />

                <button className="add-button" type="submit">
                    Add
                </button>

                <button
                    className="delete-all-button"
                    type="button"
                    onClick={deleteAll}
                >
                    Delete All
                </button>
            </form>

            <ul>
                {todos.map((item, index) => (
                    <>
                        <li key={index}>{item}
                            <button onClick={() => deleteTodo(index)}>Delete</button>
                        </li>

                    </>
                ))}
            </ul>
        </div>
    );
}

export default Q4Todo;






















