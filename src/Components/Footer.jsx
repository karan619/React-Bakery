import React from "react";
import "./Footer.css";
import Logo from "./Images/circle-cropped.png";
const Footer = () => {
  return (
    <div className="footer_wrapper">
      <h1 className="footer_header">4700 Keele St, Toronto, ON M3J 1P3</h1>
      <h2 className="footer_number">Enquiry number: 123 456 789</h2>
      <h3 className="footer_time_header">Operation Hours:</h3>
      <h4 className="footer_time">MON-FRI: 08:00 AM -10:00 PM</h4>
      <h4 className="footer_time">SAT-SUN: 10:00 AM -11:00 PM</h4>
      <img src={Logo} alt="" className="footer_logo" />
      <div className="social_media_wrapper">
        <i className="fab fa-twitter social_media_icon"></i>
        <i className="fab fa-facebook-f social_media_icon"></i>
        <i className="fab fa-instagram social_media_icon"></i>
      </div>
    </div>
  );
};

export default Footer;
