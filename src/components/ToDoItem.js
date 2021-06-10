import React from "react";
import ToDoItemsActions from "./ToDoItemActions";

const ToDoItem = ({todo}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className={todo.completed ? 'text-danger text-decoration-line-through' : ''}>{todo.title}</div>
            <ToDoItemsActions id={todo.id}/>
        </li>
    )
}

export default ToDoItem
