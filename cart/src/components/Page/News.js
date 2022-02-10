import React from "react";
import { Link } from "react-router-dom";
import { news } from ".././data";
const Newss = () => {
  return (
    <section className="container mt2 mb-3 p5 well">
      <div className="card-body">
        {news.map((item, index) => {
          return (
            <>
              <h5 key={item.id} className="card-title">
                {item.newsTitle}
              </h5>
              <p className="card-text">{item.newsText}</p>
              <Link to="/news" className="card-link">
                Read More
              </Link>
            </>
          );
        })}
      </div>
    </section>
  );
};
export default Newss;
