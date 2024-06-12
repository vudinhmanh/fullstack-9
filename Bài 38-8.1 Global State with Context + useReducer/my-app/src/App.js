import React from 'react';
import { useStore, actions} from './store';
const App = () => {
  const [state, dispatch] = useStore()
  const {todos, todoInput} = state
  console.log(todoInput);
  return (
    <div>
      <input 
        type="text" 
        value={todoInput}
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
    </div>
  );
};

export default App;