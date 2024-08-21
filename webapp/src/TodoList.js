import Todo from "./Todo";

import "./TodoList.css"

function TodoList({ todos }) {

    console.log(todos);

    return (
        <div className="list">
        {todos.map(todo =>
            <Todo todo={todo}/>
        )}
        </div>
    )

}

export default TodoList;
