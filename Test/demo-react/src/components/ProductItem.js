import React from 'react';

const ProductItem = (props) => {
  return (
    <div className=''>
      <div className='flex gap-5'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ProductItem;