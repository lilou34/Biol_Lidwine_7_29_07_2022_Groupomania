import React from "react";
import logo from "./icon-left-font_preview_rev_1.png";
import { NavLink } from "react-router-dom";


const Logo = () => {
  return (
    <div>
      <NavLink to='/Newsfeed' className="newsfeed-link">
        <img src={logo} className="logo" />
      </NavLink>
    </div>
  );
};

export default Logo;
