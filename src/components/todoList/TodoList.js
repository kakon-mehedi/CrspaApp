import React from "react";
import Todo from "../todo/Todo";

import "./todoList.css";

function TodoList() {
  return (
    <>
      <div className="todos-section">
        <div className="todos">
          <div className="add-todos">
            <input type="text" className="todo-input" />
            <button className="add-todo-btn">Add Todo</button>
          </div>
          <ul className="todo-list">
            <Todo />
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;
