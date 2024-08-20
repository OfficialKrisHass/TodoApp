import { useEffect, useState } from 'react';

import TodoList from './TodoList';

import './App.css';

//const todos = ["Todo List", "Scrolling UI", "List scroll", "This is just to", "fill out and scroll", "Finishing Todos", "Loading Todos", "bla bla", "bla #2"];

function App() {

    const [todos, setTodos] = useState([{}]);

    useEffect(() => {

        fetch("/api/todos").then(response => response.json())
        .then(data => {
            
            setTodos(data);

        });

    }, []);

    return (
        <div className="card">
            <h1>Todo App</h1>
            <div className="row">
                <input type="text" placeholder="New task"></input>
                <button>Add</button>
            </div>
            <TodoList todos={todos}/>
        </div>
    );

}

export default App;
