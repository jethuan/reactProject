import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
class DetailUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let response = await axios(`https://fakestoreapi.com/products/${id}`);
      let { data } = await response;

      console.log("check response", data);
      this.setState({
        user: data && data ? data : [],
      });
    }
  }
  handleBack = () => {
    this.props.history.push(`/products`);
  };
  render() {
    let { user } = this.state;
    let isObjEmpty = Object.keys(user).length === 0;
    return (
      <>
        {isObjEmpty == false && (
          <>
            <section className="container m-5">
              <div className="row">
                <div className="col-md-7 ">
                  <div>
                    <img src={user.image} />
                  </div>
                </div>
                <div className="col-md-5 ">
                  <div>
                    <h4 className="mb-3">{user.category}</h4>
                    <h3 className="mb-3">{user.title} </h3>
                    <div className="mb-3">
                      <div className="stars ">
                        <span
                          className="fa fa-star "
                          style={{ color: "#ff9f1a" }}
                        ></span>
                        <span
                          className="fa fa-star "
                          style={{ color: "#ff9f1a" }}
                        ></span>
                        <span
                          className="fa fa-star "
                          style={{ color: "#ff9f1a" }}
                        ></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <span className="review-no">
                        Rating rate : {user.rating.rate}
                      </span>
                      <span className="review-no">
                        {" "}
                        Raiting count: {user.rating.count}
                      </span>
                    </div>
                    <p>
                      {user.description}
                      <Link to="/news" className="card-link m-5">
                        Read More
                      </Link>
                    </p>
                    <p style={{ fontStyle: "italic" }}>
                      price: {user.price} USD{" "}
                    </p>
                    <div className="m-0">
                      <span className="">Quantity</span>
                      <input
                        name="isGoing"
                        type="number"
                        checked={this.state.numberOffGuest}
                        onChange={this.handleInputChange}
                        placeholder="0"
                        className="p-1 m-2"
                      ></input>
                      <hr />
                    </div>
                    <div className="mt-5">
                      <p>Item is eligible for PPS Club Voucher redemption.</p>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary m-2"
                        style={{ padding: "0px 40px" }}
                      >
                        <span>ADD TO BAG</span>
                        <br />
                        <span> Pre-order to flight</span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary m-2 "
                        style={{ padding: "0px 40px" }}
                      >
                        <span>ADD TO BAG</span>
                        <br />
                        <span>Deliverly</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div>
              <button type="button" onClick={() => this.handleBack()}>
                Back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default withRouter(DetailUser);
