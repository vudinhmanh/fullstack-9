import React from "react";
import { useState, useCallback } from "react";
import Content from "./components/Content.js";
const App = () => {
  const [count, setCount] = useState(0);
  const handleCount = useCallback(() => {
    setCount((pre) => pre + 1);
  }, []);
  return (
    <div style={{ padding: 100 }}>
      <Content onCount={handleCount} />
      <h1>{count}</h1>
    </div>
  );
};
export default App;
