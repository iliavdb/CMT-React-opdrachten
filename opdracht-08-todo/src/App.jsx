import { useState } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="container">
      <h1>Opdracht 8 - To Do</h1>

      <TodoForm onAddTodo={addTodo} />

      <TodoList items={todos} />
    </div>
  );
}

export default App;
