import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow max-w-sm text-center">
        <img src="/foto.png" alt="workcation" className="rounded mb-4" />

        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          You can work from anywhere.
        </h1>

        <p className="text-indigo-600 font-semibold mb-3">Take advantage of it.</p>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
        </p>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded text-sm">
          Book your escape
        </button>
      </div>
    </div>
  );
}