import React from "react";
import { useContext } from "react"
import { ThemeContext } from "../App";
const Paragraph = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={theme}>
      <p>
        React Context is a way to manage state globally. It can be used together
        with the useState Hook to share state between deeply nested components
        more easily than with useState alone.
      </p>
    </div>
  );
};

export default Paragraph;
