import React from "react";
import "./MenuItem.css";
export interface IMenuProps {
  addToCart: (val1: string, val2: number) => any;
  allergens: string[];
  description: string;
  image: string;
  item: string;
  price: number;
  subFromCart: (val1: string, val2: number) => any;
  subtype: string;
  type: string;
}

export const BakeryMenuItem = (props: IMenuProps) => {
  const {
    addToCart,
    allergens,
    description,
    image,
    item,
    price,
    subFromCart,
    subtype,
    type,
  } = props;

  return (
    <div className="menuItem">
      <div className="menuImageWrapper">
        <img className="menuItemImage" src={image} />
      </div>
      <div className="menuItemContent">
        <div className="menuItemHeader">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>{item}</h3>
            <p style={{ marginLeft: "5px" }}>${price}</p>
          </div>
          <div style={{ display: "flex", marginRight: "15px", zIndex: "5" }}>
            <button
              className="addToCartButton"
              onClick={() => subFromCart(item, price)}
            >
              -
            </button>
            <button
              className="addToCartButton"
              onClick={() => addToCart(item, price)}
            >
              +
            </button>
          </div>
        </div>
        <div className="menuItemBody">
          <p>{description}</p>
          <p style={{ lineHeight: 1.5 }}>
            <em>Category: {type} </em>
          </p>
          {allergens.length > 0 && (
            <p style={{ color: "red" }}>
              <em>Contains: {allergens.join(", ")} </em>
            </p>
          )}
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
