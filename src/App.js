import React, { useState, useEffect } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("I got clicked");
  });

  return (
    <div>
      <h1>Hello World</h1>
      <button
        className="btn"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click me {num}
      </button>
    </div>
  );
};

export default App;
