import { useReducer } from "react";
// Init state
const initState = {
  job: "",
  jobs: [],
};
// Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";
const setJob = payload => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}
const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}
//Reducer
const reducer = (state, action) => {
  let newState;
  switch(action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
      
    case ADD_JOB:
      return {
        ...state,
        jobs:[...state.jobs, action.payload]
      }
      
    case DELETE_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)
      return {
        ...state,
        jobs: newJobs
      }
      
    default:
  }

};
function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const handleAdd = () => {
    dispatch(addJob(job))
  }
  return (
    <div style={{ padding: 100 }}>
      <h1>Todo list</h1>
      <input
        type="text"
        name=""
        id=""
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
              <span onClick={() => dispatch(deleteJob(index))}>
                &times;
              </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
