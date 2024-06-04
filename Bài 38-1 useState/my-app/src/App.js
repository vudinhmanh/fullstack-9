import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState('');
  const handleAdd = () => {
    setJobs(prev => [...prev, job])
  }
  return (
    <div style={{padding: 10}}>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {
          jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
