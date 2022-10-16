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

  const handleUpdateInput = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  };

  const handleUpdate = () => {
    handleUpdateTodo(currentTodo.id, currentTodo);
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
            onChange={handleUpdateInput}
            defaultValue={currentTodo.text}
          />
          <button className="add-todo-btn" onClick={handleUpdate}>
            Update
          </button>
        </div>
      ) : (
        <div className="add-todos">
          <input
            type="text"
            className="todo-input"
            onChange={handleInputChange}
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
