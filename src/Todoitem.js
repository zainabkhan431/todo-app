function Todoitem({ todo, deleteTask, toggleTodo }) {
  return (
    <div className="todo-item">
      <li>
        <span
          className="text"
          onClick={toggleTodo}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
        <button className="button-item" onClick={deleteTask}>
          Delete
        </button>
      </li>
    </div>
  );
}

export default Todoitem;
