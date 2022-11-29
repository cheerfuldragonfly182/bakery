import React, { useEffect, useState } from "react";
import "./Cart.css";
import { TextField } from "@mui/material";
export interface ICartItemProps {
  updateFunction: (name: string, number: number) => any;
  quantity: number;
  price: number;
  name: string;
}

export const CartItem = (props: ICartItemProps) => {
  const { name, price, quantity, updateFunction } = props;

  const [displayQuantity, setDisplayQuantity] = useState(quantity);

  useEffect(() => {
    setDisplayQuantity(quantity);
  }, [quantity]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <div>
        <p>{name}</p>
        <div className="quantityRow">
          <p style={{ marginRight: "5px" }}>Quantity</p>
          <TextField
            type="number"
            size="small"
            value={displayQuantity}
            sx={{ width: "5em" }}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
            onChange={(e) => {
              updateFunction(name, Number(e.target.value));
            }}
          />
        </div>
      </div>
      <p>${quantity * price}</p>
    </div>
  );
};
