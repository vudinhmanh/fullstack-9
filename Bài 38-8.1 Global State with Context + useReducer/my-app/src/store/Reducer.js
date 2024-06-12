import { SET_TODO_INPUT } from "./constants"
const initState = {
  todos: [],
  todoInput:''
}
function reducer(state, action) {
  switch(action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload
      }
    default:
  }
}
export {initState}
export default reducer
