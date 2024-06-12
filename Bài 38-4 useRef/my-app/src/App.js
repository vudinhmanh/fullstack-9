import { useEffect, useRef, useState } from "react";
function App() {
  const [count, setCount] = useState(60);
  const timeID = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();
  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  useEffect(() => {
    console.log(h1Ref.current);
  });
  const handleStart = () => {
    timeID.current = setInterval(() => {
      setCount((pre) => pre - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timeID.current);
  };
  console.log(count, prevCount.current);
  return (
    <div style={{ padding: 100 }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
