import React from "react";
import logo from "./icon-left-font_preview_rev_1.png";
import { NavLink } from "react-router-dom";
import css from "./Logo.module.scss";

const Logo = () => {
  return (
    <div>
      <NavLink to='/Newsfeed'>
        <img src={logo} className={css.logo} />
      </NavLink>
    </div>
  );
};

export default Logo;
