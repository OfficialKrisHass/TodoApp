import { useEffect, useState } from 'react';

import TodoList from './TodoList';

import './App.css';

//const todos = ["Todo List", "Scrolling UI", "List scroll", "This is just to", "fill out and scroll", "Finishing Todos", "Loading Todos", "bla bla", "bla #2"];

function App() {

    const [todos, setTodos] = useState([{}]);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {

        fetch("/api/todos").then(response => response.json())
        .then(data => {
            
            setTodos(data);

        });

    }, []);

    const AddTodo = async () => {

        if (newTodo === "") return;

        fetch("/api/todos", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: newTodo, finished: false })

        }).then(response => response.json())
        .then(data => {

            setTodos([
                ...todos,
                data
            ]);
            setNewTodo("");
                
        });

    }

    return (
        <div className="card">
            <h1>Todo App</h1>
            <div className="row">
                <input type="text" placeholder="New task" value={newTodo}
                    onChange={event => setNewTodo(event.target.value)}>
                </input>
                <button onClick={AddTodo}>Add</button>
            </div>
            <TodoList todos={todos}/>
        </div>
    );

}

export default App;
