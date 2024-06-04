import { forwardRef } from "react";
const Input = forwardRef((props, abc) => {
  return (
    <div>
      <input ref={abc} type="text"/>
    </div>
  )
})
export default Input