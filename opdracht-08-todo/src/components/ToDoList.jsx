import TodoItem from "./TodoItem";

function TodoList({ items }) {
  return (
    <ul>
      {items.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
