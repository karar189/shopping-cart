import React, { useState } from "react";
import list from "../data";
import Card from "./card";
import "../styles/amazon.css";

const Amazon = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart([...cart, item]);
    console.log(cart);
  };

  return (
    <section>
      {list.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
