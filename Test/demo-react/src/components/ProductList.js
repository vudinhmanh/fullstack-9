import React from "react";
import { data } from "../data";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="">
      {data.map((currentValue, index, _) => (
        <ProductItem
          key={currentValue.id}
          title={currentValue.title}
          description={currentValue.description}
        ></ProductItem>
      ))}
    </div>
  );
};

export default ProductList;
