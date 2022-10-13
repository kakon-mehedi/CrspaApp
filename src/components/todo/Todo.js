import { Create, Delete } from "@mui/icons-material";
import React from "react";
import "./todo.css";

function Todo() {
  return (
    <>
      <li className="todo-list-item">
        <div className="todo-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptas, distinctio!
        </div>
        <Delete className="todo-icon" />
        <Create className="todo-icon" />
      </li>
    </>
  );
}

export default Todo;
