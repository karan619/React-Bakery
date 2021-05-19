import React from "react";
import { Badge } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import "./Header.css";
import Banner from "./Banner";
import Logo from "./Images/circle-cropped.png";

const Header = ({ totalItems }) => {
  //state and dispatch

  return (
    <>
      <header className="header_wrapper">
        <nav className="header">
          {/**Logo on the left */}
          <Link to="/">
            <img src={Logo} alt="Bakery-Logo" className="header_logo" />
          </Link>

          {/** Different links */}
          <div className="header_nav">
            {/** link 1*/}
            <Link to="/" className="header_link">
              <div className="header_option">
                <span className="header_optionLineOne">HOME</span>
              </div>
            </Link>

            {/** link 2*/}
            <Link to="/cart" className="header_link">
              <div>
                <Badge
                  badgeContent={totalItems}
                  className="basket"
                  color="primary"
                >
                  <ShoppingBasketIcon />
                </Badge>
              </div>
            </Link>
          </div>
        </nav>

        {/**Banner Component */}

        <Banner />
      </header>
    </>
  );
};

export default Header;
