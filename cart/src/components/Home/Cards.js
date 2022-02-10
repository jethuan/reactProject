import React, { Component } from "react";
import "./product.scss";
import { item } from ".././data";
import CardTop from "../productLayout/CardTop";
import NewArrival from "../productLayout/newArrival";
import KrisShop from "../productLayout/KrisShop";
import AppleProducts from "../productLayout/Apple";
import ShopLocal from "../productLayout/ShopLocal";
class Cards extends Component {
  render() {
    return (
      <section className="product">
        <div className="container">
          <div className="row">
            <CardTop />
            <hr />
            <NewArrival />
            <hr />
            <KrisShop />
            <hr />
            <AppleProducts />
            <hr />
            <ShopLocal />
          </div>
        </div>
      </section>
    );
  }
}

export default Cards;
