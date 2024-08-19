import "./Todo.css"

function Todo({ title }) {

    return (
        <div className="todo">
            <input type="checkbox" name="finished"></input>
            <label for="finished">{title}</label>
        </div>
    )

}

export default Todo;
