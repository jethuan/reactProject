import React from "react";
const NotFoundPage = () => {
  return (
    <section
      className="container d-flex justify-content-center align-content-center  "
      style={{ width: "100%", height: "100vh" }}
    >
      <div className="row  d-flex justify-content-center align-content-center ">
        <p
          style={{
            color: "navy",
            "text-indent": "30px",
            "text-transform": "uppercase",
            "font-weight": "boild",
            "font-size": "50px",
          }}
        >
          404 Not found
        </p>
      </div>
    </section>
  );
};
export default NotFoundPage;

const errorTemplate = {};
