import React, { useState } from "react";
import ToDo from "./todo";
import AddToDos from "./addTodos";
import "./app.css";

function App() {
  const [todos, setTodos] = useState([]);
  const deleteToDos = (id) => {
    let tempToDos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(() => tempToDos);
  };
  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };
  return (
    <div className="App container">
      <h1 className="center blue-text">My ToDo App</h1>
      <AddToDos addTodo={addTodo} />
      <ToDo
        todos={todos}
        deleteToDos={deleteToDos}
        completeTodo={completeTodo}
      />
    </div>
  );
}

export default App;
