import React, { useState, useTransition } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    setCount(count + 1);
    // Urgent update: Reflect button click immediately

    startTransition(() => {
      // Simulate expensive filtering operation
      const newData = filterData(someLargeDataset);
      setFilteredData(newData);
      // Non-urgent update: Delay to avoid blocking UI
    });
  };

  return (
    <div className="w-screen min-h-screen bg-cyan-300">
      <button onClick={handleClick}>Click me</button>
      <p>Count: {count}</p>
      {isPending && <p>Filtering data...</p>}
      {/* Display filtered data here */}
    </div>
  );
};

export default App;
