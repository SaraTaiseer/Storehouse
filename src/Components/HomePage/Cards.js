import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import categories from "./../../assets/categories.png";
import users from "./../../assets/users.png";
import products from "./../../assets/products.png";
function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={products}
              text="Products"
              path="/products"
            />
            <CardItem
              src={categories}
              text="Categories"
              path="/categories"
            />
            <CardItem
              src={users}
              text="Users"
              path="/users"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
