import { useState, useReducer } from "react";
// useReducer
// 1. Init state: 0
// 2. Actions
// 3. Reducer
// 4. Dispatch

// Init state
const initState = 0;

// Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

//Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
  }
};
function App() {
  const [count, dispath] = useReducer(reducer, initState);
  const handleUp = () => {
    dispath(UP_ACTION);
  };
  const handleDown = () => {
    dispath(DOWN_ACTION);
  };
  return (
    <div style={{ padding: 100 }}>
      <h1>{count}</h1>
      <button onClick={handleUp}>UP</button>
      <button onClick={handleDown}>DOWN</button>
    </div>
  );
}

export default App;
