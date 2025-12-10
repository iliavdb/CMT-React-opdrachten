import FlashCardList from "./componenten/FlashCardList";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-10 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-900 drop-shadow">
        Hoofdsteden Quiz
      </h1>

      <FlashCardList />
    </main>
  );
}

export default App;
