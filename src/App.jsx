import TodoList from "./TodoList.jsx"
import "./App.css"

const m_todos = ["Todo List", "Scrolling UI", "List scroll", "This is just to", "fill out and scroll", "Finishing Todos", "Loading Todos"];

function App() {

    return (
        <div className="card">
            <h1>Todo App</h1>
            <div className="row">
                <input type="text" placeholder="New task"></input>
                <button>Add</button>
            </div>
            <TodoList todos={m_todos}/>
        </div>
    )

}

export default App;
