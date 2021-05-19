import React from "react";
import "./Home.css";
import Messagebanner from "./Messagebanner";
import Products from "./Products";
import wheat from "./Images/wheat.png";
import bread from "./Images/bread.png";
import delivery from "./Images/delivery.png";

const Home = ({ products, onAddToCart }) => {
  return (
    <>
      <div className="home_wrapper">
        <div className="ingridients_wrapper">
          <div className="ingridients_banner">
            <img
              src={wheat}
              alt="fresh-ingridients"
              className="ingridients_img"
            />
            <h3 className="image_title">FRESH INGREDIENTS</h3>
            <p className="image_text">
              All of our products are made with the finest
              <br /> quality ingredients and guaranteed fresh.
            </p>
          </div>
          <div className="ingridients_banner">
            <img
              src={bread}
              alt="fresh-ingridients"
              className="ingridients_img"
            />
            <h3 className="image_title">BAKED WITH LOVE</h3>
            <p className="image_text">
              Each of our handmade items are carefully baked with love.
            </p>
          </div>
          <div className="ingridients_banner">
            <img
              src={delivery}
              alt="fresh-ingridients"
              className="ingridients_img"
            />
            <h3 className="image_title">ON TIME DELIVERY</h3>
            <p className="image_text">
              We are very punctual and promise to deliver
              <br /> fresh made products to every customer on time.
            </p>
          </div>
        </div>
      </div>
      <div className="message_wrapper">
        {/** message banner component */}
        <Messagebanner />
      </div>

      <div className="product_wrapper">
        <div className="product_heading_wrapper">
          <h1 className="product_heading">Taste Atisan</h1>
          <h2 className="product_sub_heading">patistry</h2>
        </div>

        <div className="products_wrapper_row">
          <div className="products_row">
            <Products products={products} onAddToCart={onAddToCart} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
