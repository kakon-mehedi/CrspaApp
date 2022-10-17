import "./todoInput.css";

function TodoInput({
  todo,
  setTodo,
  todos,
  setTodos,
  isUpdate,
  setIsUpdate,
  currentTodo,
  setCurrentTodo,
  updateTodo,
  setUpdateTodo,
}) {
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleUpdateInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  };

  const handleAddTodoClick = (e) => {
    if (todo !== "") {
      setTodos((prev) => [
        ...prev,
        {
          id: todos.length + 1,
          text: todo.trim(),
        },
      ]);
    }
    setTodo("");
  };

  const handleUpdateClick = () => {
    handleUpdateTodo(currentTodo.id, currentTodo);
    //document.getElementById("todo-input-id").value = "";
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });

    setIsUpdate(false);
    setTodos(updatedItem);
  };

  return (
    <>
      {isUpdate ? (
        <div className="add-todos">
          <input
            type="text"
            className="todo-input"
            onChange={handleUpdateInputChange}
            value={currentTodo.text}
          />
          <button className="add-todo-btn" onClick={handleUpdateClick}>
            Update
          </button>
        </div>
      ) : (
        <div className="add-todos">
          <input
            type="text"
            className="todo-input"
            id="todo-input-id"
            onChange={handleInputChange}
            value={todo}
          />
          <button className="add-todo-btn" onClick={handleAddTodoClick}>
            Add Todo
          </button>
        </div>
      )}
    </>
  );
}

export default TodoInput;
