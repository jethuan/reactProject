import React, { Component } from "react";
import cardImage from "../../asset/img/card.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
class CardDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // numberOffGuest: 0,
      ProductDetail: {},
    };
  }
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let response = await fetch(`https://fakestoreapi.com/products/${id}`);
      let { data } = await response;

      console.log("check chi tiet sản pham", data);
      this.setState({
        ProductDetail: data ? data : {},
      });
    }
  }
  handleBack = () => {
    this.props.history.push(`/products`);
  };
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <section className="container m-5">
        <div className="row">
          <div className="col-md-7 ">
            <div>
              <img src={cardImage} />
            </div>
          </div>
          <div className="col-md-5 ">
            <div>
              <h4 className="mb-3">Brand LOQI</h4>
              <h3 className="mb-3">
                SINGAPORE AIRLINES BATIK TOTE BAG BY LOQI - COLOUR
              </h3>
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
                <span className="review-no">999 reviews</span>
              </div>
              <p>
                Designed specially for the Batik Label by KrisShop, this
                collaboration features the unique Singapore Airlines batik
                motif. Inspired by flowers native to Singapore, this elegant
                batik motif is a representation of the heritage and grace of the
                world class airline.
                <br />
                LOQI bags are super-strong, long-lasting, water-resistant and
                extremely good looking
                <Link to="/news" className="card-link m-5">
                  Read More
                </Link>
              </p>
              <p style={{ fontStyle: "italic" }}>price: SGD: 19.00</p>
              <h3>SGD 22.00</h3>
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
    );
  }
}
export default withRouter(CardDetails);
