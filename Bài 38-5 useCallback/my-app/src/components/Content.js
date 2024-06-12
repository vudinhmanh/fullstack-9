import React from 'react';
import { memo } from "react";
const Content = ( {onCount} ) => {
  console.log("content");
  return (
    <div>
      <h1>Day la content</h1>
      <button onClick={onCount}>Click</button>
    </div>
  );
};

export default memo(Content);