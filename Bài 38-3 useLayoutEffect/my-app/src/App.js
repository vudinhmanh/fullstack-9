// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM
// 3. Render lại UI
// 4. Gọi cleanup nếu dep thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM
// 3. Gọi cleanup nếu dep thay dổi
// 4. Gọi useLayoutEffect callback
// 5. Render lại UI
import { useEffect, useState,useLayoutEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ padding: 60 }}>
      <h1>{count}</h1>
      <button onClick={handleCount}>Click</button>
    </div>
  );
}
export default App;
