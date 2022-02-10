import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
const NavBarBoostrap = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ "background-color": "rgb(32,39,77)" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          <i class="fas fa-shipping-fast me-3"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="">
            <i className="fa fa-bars" style={{ color: "#fff" }} />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto ">
            <li className="nav-item">
              <Link
                className="nav-link active text-white text-uppercase ml-5"
                aria-current="page"
                to="/products"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/news"
              >
                New
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link  text-white text-uppercase ml-5"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link  text-white text-uppercase ml-5"
                to="/about"
              >
                About Us
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default NavBarBoostrap;
