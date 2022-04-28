import { useState } from "react";

function HooksCounter() {
  const [count, setCount] = useState(0);

  const reset = () => {
    setCount(0);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col justify-center text-center mt-8">
      <h4 className="font-bold">Just fun Increment and Decrement counter :D</h4>
      <h1 className="font-bold text-4xl mt-6">{count}</h1>
      <div className="flex justify-evenly mt-8">
        <button
          onClick={() => setCount(count + 1)}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Increment
        </button>
        <button
          onClick={reset}
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          Reset
        </button>
        <button
          onClick={decrement}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default HooksCounter;
