// import ProductList from "./components/ProductList";
import { useState } from "react";
// const gifts = [
//   'mon qua 1',
//   'mon qua 2',
//   'mon qua 3'
// ]
function App() {
  // const [counter, setCounter] = useState(1);
  // const handleIncrease = () => {
  //   setCounter(counter + 1)
  // }
  // const[gift, setGift] = useState();
  // const RandomGift = () => {
  //   const index = Math.floor(Math.random() * gifts.length)
  //   setGift(gifts[index])
  // }
  const handleSubmit = () => {
    setJobs(prev => [...prev, job]);
  }
  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState([]);
  return (
    <div className="p-40">
      {/* <ProductList>
        
      </ProductList> */}

      {/* <h1>{counter}</h1>
      <button onClick={handleIncrease} className="bg-yellow-300 px-3 py-3 rounded-xl">Click</button> */}

      {/* <h1>{gift || "co cl"}</h1>
      <button onClick={RandomGift} className="bg-yellow-300 px-3 py-3 rounded-xl">Click</button> */}
      <input
        className="bg-gray-200  px-2 py-3 outline-none"
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit} className="bg-slate-600 px-2 py-3">ADD</button>
      <ul>
        {jobs.map((job, index) =>(
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
