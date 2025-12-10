import FlashCard from "./FlashCard";
import data from "../data";

function FlashCardList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
      {data.map((item, index) => (
        <FlashCard
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}

export default FlashCardList;
