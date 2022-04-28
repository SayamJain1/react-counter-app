import React, { useState } from "react";
import HooksCounter from "./components/HooksCounter";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-24">
      <h1 className="mb-8 text-center text-2xl font-bold"> Counter App </h1>
      <button
        onClick={() => setShow(!show)}
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        {show ? "Hide counter" : "Show counter"}
      </button>

      {show && <HooksCounter />}
    </div>
  );
}

export default App;
