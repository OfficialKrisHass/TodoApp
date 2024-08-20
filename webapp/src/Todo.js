import "./Todo.css"

function Todo({ todo }) {

    return (
        <div key={todo.title} className="todo">
            <input type="checkbox" name="finished" checked={todo.finished}/>
            <label htmlFor="finished">{todo.title}</label>
        </div>
    )

}

export default Todo;
