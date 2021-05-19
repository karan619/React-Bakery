import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner_wrapper">
      <div className="shop_heading">Bakery Shop</div>
      <div className="patistry_heading">patistry</div>
      <hr />
      <div className="sub_heading">
        we produce our breads & cakes from nature ingredients, love and <br />
        <span className="span_text">passion.</span>
      </div>
    </div>
  );
}

export default Banner;
