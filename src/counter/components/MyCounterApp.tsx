import  useCounter  from "../hooks/useCounter";

export default function MyCounterApp() {
  const {counter, handleAdd, handleSubtract, handleReset}= useCounter();

  return (
    <div className="flex flex-col items-center gap-5 h-screen justify-center">
      <h1 className="text-xl font-bold">counter: {counter}</h1>
      <div className="flex gap-3">
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          +1
        </button>
        <button
          onClick={handleSubtract}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -1
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
