import Todoitem from "./Todoitem";

function TodoList({ todo, deleteTask, toggleTodo }) {
  return (
    <ul className="todo-list">
      {todo?.map((todo, index) => (
        <Todoitem
          key={index}
          todo={todo}
          deleteTask={() => deleteTask(index)}
          toggleTodo={() => toggleTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
