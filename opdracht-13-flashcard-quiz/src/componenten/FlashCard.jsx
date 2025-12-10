import { useState } from "react";

function FlashCard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="relative w-72 h-48 cursor-pointer perspective"
    >
      <div
        className={`relative w-full h-full duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-white border border-gray-300 rounded-2xl shadow-xl flex items-center justify-center p-5 backface-hidden">
          <p className="text-lg font-semibold text-gray-800">{question}</p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-blue-600 border border-gray-300 rounded-2xl shadow-xl flex items-center justify-center p-5 rotate-y-180 backface-hidden text-white">
          <p className="text-lg font-semibold">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
