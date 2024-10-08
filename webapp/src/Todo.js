import "./Todo.css"

function Todo({ todo, deleteTodo }) {

    const onChange = (event) => {

        fetch(`/api/todos/finish/${todo.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: todo.id,
                finished: event.target.checked
            })
        }).then(() => todo.finished = event.target.checked);

    };

    return (
        <div key={todo.id} className="todo">
            <input type="checkbox" name="finished" defaultChecked={todo.finished} onChange={onChange}/>
            <label htmlFor="finished">{todo.title}</label>
            <button onClick={() => deleteTodo(todo)}>
                <i className="fa fa-close"/>
            </button>
        </div>
    )

}

export default Todo;
