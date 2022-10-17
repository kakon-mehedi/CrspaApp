import React, { useEffect, useState } from "react";

import Todo from "../todo/Todo";
import TodoInput from "../todoInput/TodoInput";
import "./todoList.css";

function TodoList() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentTodo, setCurrentTodo] = useState([]);
  const [todo, setTodo] = useState("");
  const [updateTodo, setUpdateTodo] = useState({});
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, currentTodo]);

  return (
    <>
      <h1 className="todos-heading">todos</h1>
      <div className="todos-section">
        <div className="todos">
          <TodoInput
            setTodo={setTodo}
            setTodos={setTodos}
            todo={todo}
            todos={todos}
            isUpdate={isUpdate}
            setIsUpdate={setIsUpdate}
            currentTodo={currentTodo}
            setCurrentTodo={setCurrentTodo}
            setUpdateTodo={setUpdateTodo}
            updateTodo={updateTodo}
          />
          <ul className="todo-list">
            {todos.map((todo) => (
              <Todo
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
                isUpdate={isUpdate}
                setIsUpdate={setIsUpdate}
                setCurrentTodo={setCurrentTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;
