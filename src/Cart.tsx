import React, { useEffect, useState } from "react";
import "./Cart.css";
import { TextField } from "@mui/material";
import { CartItem } from "./CartItem";
export interface ICartProps {
  cartItems: Map<string, { price: number; quantity: number }>;
  setCartItems: (
    newCartItems: Map<string, { price: number; quantity: number }>
  ) => any;
  updateCart: boolean;
}

export const Cart = (props: ICartProps) => {
  const { cartItems, setCartItems, updateCart } = props;

  const [totalPrice, setTotalPrice] = useState(0);
  const [updateCartFromInside, setUpdateCartFromInside] = useState(true);

  const setNumberInCart = (itemName: string, count: number) => {
    const numberInCart = cartItems.get(itemName)?.quantity ?? 0;
    const items = cartItems;
    if (items.has(itemName)) {
      if (count > 0) {
        items.set(itemName, {
          price: cartItems.get(itemName)?.price ?? 1,
          quantity: count,
        });
      } else {
        items.delete(itemName);
      }
    }
    setCartItems(items);
    setUpdateCartFromInside(!updateCartFromInside);
  };

  // make sure cart re-renders
  useEffect(() => {
    let total = 0;
    let items = Array.from(cartItems);
    for (let i = 0; i < items.length; i++) {
      total += items[i][1].quantity * items[i][1].price;
    }
    setTotalPrice(total);
  }, [updateCart, updateCartFromInside]);

  return (
    <div className="cart">
      <h3 style={{ marginBottom: "10px" }}>Cart</h3>
      {cartItems.size > 0 &&
        Array.from(cartItems).map((item, i) => {
          return (
            <div key={i} className="cartItem">
              <CartItem
                name={item[0]}
                price={item[1].price}
                quantity={item[1].quantity}
                updateFunction={setNumberInCart}
              />
            </div>
          );
        })}
      <div className="cartSummary">
        <h3>Total: ${totalPrice}</h3>
      </div>
    </div>
  );
};
