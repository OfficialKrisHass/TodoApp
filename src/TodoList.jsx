import Todo from "./Todo.jsx"
import "./TodoList.css"

function TodoList({ todos }) {

    return (
        <div className="list">
        {todos.map(todo =>
            <Todo title={todo} />
        )}
        </div>
    );

}

export default TodoList;
