import React, { Component } from "react";
import { TopPick } from "./productsItem";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
class CardTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListProduct: [],
    };
  }
  async componentDidMount() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    console.log(">>>>>> log htu coi", data);
    this.setState({
      ListProduct: data ? data : [],
    });
  }
  handleViewProductDetail = (user) => {
    console.log("check  propd>>>>>>>>", this.props);
    this.props.history.push(`/products/${user.id}`);
  };

  render() {
    let { ListProduct } = this.state;
    return (
      <section className="product">
        <div className="container">
          <div className="row">
            <p className="text-center">
              <strong>Your Daily Top Picks</strong>
            </p>
            {ListProduct &&
              ListProduct.length > 0 &&
              ListProduct.map((item, index) => {
                return (
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 product-items ">
                    <div
                      className="card"
                      key={item.id}
                      style={{ width: "18rem" }}
                      onClick={() => this.handleViewProductDetail(item)}
                    >
                      <img
                        src={item.image}
                        className="card-img-top "
                        alt="..."
                        style={{ "object-fit": "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.category}</h5>
                        <p className="card-text">{item.title}</p>
                        <p className="card-text">{item.price}</p>

                        <a key={item.id} href="#" className="btn btn-primary">
                          Read Moreâ {item.id}
                        </a>
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

export default withRouter(CardTop);
