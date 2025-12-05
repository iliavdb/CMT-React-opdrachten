function TodoItem({ text }) {
  return (
    <li className="flex items-center justify-between bg-white w-96 mx-auto mt-4 rounded-xl shadow-md overflow-hidden">
      <span className="px-4 py-3 text-lg">{text}</span>

      <div className="flex">
        <button className="bg-green-400 px-4 py-3 text-white text-xl hover:bg-green-500">
          ✓
        </button>

        <button className="bg-blue-300 px-4 py-3 text-white text-xl hover:bg-blue-400">
          🗑
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
