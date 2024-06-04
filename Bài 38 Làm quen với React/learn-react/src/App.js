
import './App.css';
import React, { useEffect, useRef, useState } from "react";
import Input from './input';
function App() {
  const testRef = useRef(null)
  const [username, setUsername] = useState('');
  const showUsername = () => {
    console.log(username);
  }
  useEffect(() => {
    console.log('username change', username);
  },[username])
  useEffect(() => {
    console.log('mounted', username);
  })
  const showValue = () => {
    console.log(testRef.current.value);
    testRef.current.focus();
  }
  return (
    <>
      <input type="text" onChange={e => setUsername(e.target.value)}/>
      {username}

      <input type="text" ref={testRef}/>
      <button onClick={showValue}>Test ref</button>

      <Input ref={testRef}/>
      <button onClick={showValue}>Xem ref</button>
    </>
  );
}

export default App;
