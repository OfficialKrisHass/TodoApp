import Todo from "./Todo";

import "./TodoList.css"

function TodoList({ todos, setTodos }) {

    const deleteTodo = (todo) => {

        fetch(`/api/todos/${todo.id}`, {
            method: "DELETE",
        }).then(res => res.json())
        .then(data => {
            
            if (data.message !== "Success") throw new Error(data.message);

            setTodos(ret => ret.filter(item => item.id !== todo.id));

        })

    }

    return (
        <div className="list">
        {todos.map(todo =>
            <Todo todo={todo} deleteTodo={deleteTodo}/>
        )}
        </div>
    )

}

export default TodoList;
