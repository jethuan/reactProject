import React, { Component } from "react";
import { krisShop } from "./productsItem";
import { Link } from "react-router-dom";
import banner from "./banner_krissShop.jpg";

class KrisShop extends Component {
  render() {
    return (
      <section className="product">
        <div className="container">
          <div className="row">
            <p className="text-center">
              <strong>
                KrisShop Spectacular Deals - Redeem with your KrisFlyer miles
              </strong>
            </p>{" "}
            <img src={banner} className="d-block w-100 mb-3" />
            {krisShop.map((items, index) => {
              return (
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 product-items ">
                  <div className="card">
                    <img src={items.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{items.headerTitle}</h5>
                      <p className="card-text">{items.headerSubTitle}</p>
                      <Link to="/cardDetails">
                        <a href="#" className="btn btn-primary">
                          Read More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default KrisShop;
