import { useMemo, useRef, useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const nameRef = useRef()
  const handleAdd = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName('')
    setPrice('')
    nameRef.current.focus()
  };
  const total = useMemo(() => {
    const res = products.reduce((res, product) => {
      console.log("chay lai");
      return res + product.price;
    }, 0);
    return res;
  }, [products]);
  return (
    <div style={{ padding: 100 }}>
      <input
        ref={nameRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleAdd}>Add</button>
      <p>Total: {total}</p>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
