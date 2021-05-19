import React from "react";
import { Badge } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Logo from "./Images/circle-cropped.png";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <header className="navbar_wrapper">
        <nav className="navbar">
          {/**Logo on the left */}
          <Link to="/">
            <img src={Logo} alt="Bakery-Logo" className="navbar_logo" />
          </Link>

          {/** Different links */}
          <div className="navbar_links">
            {/** link 1*/}
            <Link to="/" className="navbar_link">
              <div className="navbar_option">
                <span className="navbar_optionLineOne">HOME</span>
              </div>
            </Link>

            {/** link 2*/}
            {location.pathname === "/" && (
              <Link to="/cart" className="navbar_link">
                <div className="navbar_basket_Wrapper">
                  <span className="navbar_optionBasket">
                    {/**Shopping basket */}
                    <Badge badgeContent={2} color="primary">
                      <ShoppingBasketIcon />
                    </Badge>
                    {/**Number of items in the basket */}
                  </span>
                </div>
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
