import React from "react";
import CartProduct from "./CartProduct";
export default function CartList({ value }) {
  return (
    <div>
      {value.cart.map((item) => {
        return <CartProduct item={item} value={value} />;
      })}
    </div>
  );
}
