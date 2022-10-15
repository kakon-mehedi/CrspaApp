import { Create, Delete } from "@mui/icons-material";
import React from "react";
import "./todo.css";

function Todo({
  todos,
  todo,
  setTodos,
  isUpdate,
  setIsUpdate,
  setCurrentTodo,
}) {
  const deleteTodo = (id) => {
    const remainingData = todos.filter((todo) => todo.id !== id);
    setTodos(remainingData);
  };

  const editTodo = (todo) => {
    //const currentData = todos.filter((todo) => todo.id === id);
    setCurrentTodo({ ...todo });
    setIsUpdate(true);
  };

  return (
    <>
      <li className="todo-list-item">
        <div className="todo-text">{todo.text}</div>
        <Delete className="todo-icon" onClick={() => deleteTodo(todo.id)} />
        <Create className="todo-icon" onClick={() => editTodo(todo)} />
      </li>
    </>
  );
}

export default Todo;
