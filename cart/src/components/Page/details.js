import React from "react";
import { reviews } from ".././data";
import { detailInfo } from ".././data";
const Details = () => {
  return (
    <>
      <section>
        <div className="container-fluid d-flex align-items-center flex-column text-center">
          <h1 className="mt-5">Need help? You've come to the right place!</h1>
          <p className="mb-5">
            Our Customer Care team provides fast, detailed responses to your
            questions 24 hours a day! Our goal is to respond to each query we
            receive within 12 to 24 hours. <br /> Occasionally it may take up to
            36 hours to reply. Thanks in advance for your patience.
          </p>
          <div className="container d-flex justify-content-around flex-row m-5">
            <a style={{ color: "#3b5998" }} href="#!">
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a style={{ color: "#55acee" }} href="#!">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a style={{ color: "#dd4b39" }} href="#!">
              <i className="fab fa-google fa-lg"></i>
            </a>
            <a style={{ color: "#ac2bac" }} href="#!">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
      </section>
      {/* nav link */}
      <section className="container">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#aboutPlace"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Details
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#review"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Reviews
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#map"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Map
            </button>
          </li>
        </ul>
        {/* aboutPlace */}
        <div className="tab-content mb-5">
          <div
            className="tab-pane active  text-left mt-5"
            id="aboutPlace"
            role="tabpanel"
          >
            <img
              src={detailInfo.img}
              className="img-thumbnail img-fluid mb-5"
            />
            <h2 className="mb-3">{detailInfo.headerTitle}</h2>
            <p>{detailInfo.headerText}</p>
            <p>{detailInfo.reviews}</p>
            <p>{detailInfo.description}</p>
          </div>
          {/* reviews */}
          <div className="tab-pane " id="review" role="tabpanel">
            <div className="container">
              {reviews.map((item, index) => {
                return (
                  <>
                    <div className="media mt-5">
                      <img
                        src={item.avatar}
                        style={{ width: "40px" }}
                        className="mr-3"
                      />
                    </div>
                    <div className="media-body">
                      <h5 className="mt-0">{item.name}</h5>
                      <p>{item.comment}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          {/* Map */}
          <div className="tab-pane " id="map" role="tabpanel">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501725.33928776724!2d106.41435627156571!3d10.75534045160543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2sru!4v1642397122825!5m2!1sen!2sru"
              style={{
                border: "0",
                height: "30rem",
                width: "100%",
                frameborder: "5px",
              }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
export default Details;
