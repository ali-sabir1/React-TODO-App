import React, { useState } from "react";

function AddToDos({ addTodo }) {
  const [todo, setTodo] = useState({
    id: null,
    content: "",
    completed: false,
  });

  const handleChange = (e) => {
    setTodo(() => ({
      content: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const tempTodo = { ...todo, id: Date.now() };
    addTodo(tempTodo);
    setTodo(() => ({
      id: null,
      content: "",
      completed: false,
    }));
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label>Add new ToDos : </label>
        <input type="text" onChange={handleChange} value={todo.content} />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
    </div>
  );
}

export default AddToDos;
