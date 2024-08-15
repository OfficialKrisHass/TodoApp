import Todo from "./Todo.jsx"
import "./App.css"

function App() {

    return (
        <div className="card">
            <h1>Todo App</h1>
            <div className="row">
                <input type="text" placeholder="New task"></input>
                <button>Add</button>
            </div>
            <Todo/>
        </div>
    )

}

export default App
