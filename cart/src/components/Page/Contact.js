import React from "react";

const Contact = () => {
  return (
    <section className="container mb-5">
      <div>
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        {/*Section description*/}
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
      </div>
      <div className="row">
        <div className="col-md-7 ">
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
        <div className="col-md-5">
          <h4>
            <strong>Contact Us</strong>
          </h4>
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <div className="row">
              <div className="mb-5">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="row well well-sm ">
              <div className="mb-5">
                <input
                  type="text"
                  id="email"
                  name="email"
                  class="form-control"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="row well well-sm ">
              <div className="mb-5">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  class="form-control"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="row well well-sm ">
              <div class="md-form mb-3">
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  rows="2"
                  class="form-control md-textarea"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>
          </form>
          <div class="text-center text-md-center">
            <a
              class="btn btn-primary"
              onclick="document.getElementById('contact-form').submit();"
            >
              Send
            </a>
          </div>
          <div class="status"></div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
