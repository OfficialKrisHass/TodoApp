import "./Todo.css"

function Todo({ todo }) {

    const onChange = (event) => {

        fetch(`/api/todos/${todo.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...todo,
                finished: event.target.checked
            })
        }).then(() => todo.finished = event.target.checked);

    };

    return (
        <div key={todo.id} className="todo">
            <input type="checkbox" name="finished" defaultChecked={todo.finished} onChange={onChange}/>
            <label htmlFor="finished">{todo.title}</label>
        </div>
    )

}

export default Todo;
