import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    onAddTodo(inputValue);
    setInputValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mt-20"
    >
      <input
        type="text"
        placeholder="What to do?"
        className="w-[480px] px-6 py-4 rounded-l-xl text-xl outline-none shadow-lg"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-400 text-white px-6 py-4 rounded-r-xl text-3xl flex items-center justify-center shadow-lg hover:bg-blue-500"
      >
        +
      </button>
    </form>
  );
}

export default TodoForm;
