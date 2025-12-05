import TodoItem from "./ToDoItem";

function TodoList({ items }) {
  return (
    <ul className="mt-10">
      {items.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
