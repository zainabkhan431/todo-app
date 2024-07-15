import { useState } from "react";
import TodoList from "./TodoList";

function TodoForm() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  function addtask(e) {
    e.preventDefault();
    if (input.trim()) {
      setTodo([...todo, { text: input, completed: false }]);
      setInput("");
    }
  }
  function deleteTask(index) {
    const newTodos = todo.filter((_, i) => i !== index);
    setTodo(newTodos);
  }
  function toggleTodo(index) {
    const newTodos = [...todo];
    newTodos[index].completed = !newTodos[index].completed;
    setTodo(newTodos);
  }
  return (
    <div className=" form-container">
      <form onSubmit={addtask}>
        <input
          className="input-container"
          value={input}
          type="text"
          placeholder="Add a todo"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="button" type="submit">
          Add
        </button>
      </form>
      <TodoList todo={todo} deleteTask={deleteTask} toggleTodo={toggleTodo} />
    </div>
  );
}

export default TodoForm;
