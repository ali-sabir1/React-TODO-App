function ToDo({ todos, deleteToDos, completeTodo }) {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            style={{
              color: todo.completed ? "green" : "black",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.content}
          </span>
          <button
            onClick={() => {
              completeTodo(todo.id);
            }}
          >
            Completed
          </button>
          <button
            onClick={() => {
              deleteToDos(todo.id);
            }}
          >
            X
          </button>
        </div>
      );
    })
  ) : (
    <p className="center">You have no ToDos left.....</p>
  );
  return <div className="ToDo-List">{todoList}</div>;
}

export default ToDo;
