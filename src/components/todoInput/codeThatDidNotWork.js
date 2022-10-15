import "./todoInput.css";

function TodoInput({
  todo,
  setTodo,
  todos,
  setTodos,
  updateTodo,
  isUpdate,
  setIsUpdate,
  currentTodo,
}) {
  const handleInput = (e) => {
    setTodo(e.target.value);
    console.log(todo);
  };

  const handleAddTodo = () => {
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

  console.log(isUpdate);

  const handleUpdate = (e) => {};

  function InputTodo() {
    return (
      <>
        <div className="add-todos">
          <input
            type="text"
            className="todo-input"
            onChange={(e) => handleInput(e)}
          />
          <button className="add-todo-btn" onClick={(e) => handleAddTodo(e)}>
            Add Todo
          </button>
        </div>
      </>
    );
  }

  const UpdateTodo = () => {
    return (
      <div className="add-todos">
        <input type="text" className="todo-input" onChange={handleUpdate} />
        <button className="add-todo-btn">Update</button>
      </div>
    );
  };

  //return <> {isUpdate ? <UpdateTodo /> : <InputTodo />} </>;

  return (
    <>
      {isUpdate ? (
        <div className="add-todos">
          <input type="text" className="todo-input" onChange={handleUpdate} />
          <button className="add-todo-btn">Update</button>
        </div>
      ) : (
        <div className="add-todos">
          <input
            type="text"
            className="todo-input"
            onChange={(e) => handleInput(e)}
          />
          <button className="add-todo-btn" onClick={(e) => handleAddTodo(e)}>
            Add Todo
          </button>
        </div>
      )}
    </>
  );
}

export default TodoInput;
