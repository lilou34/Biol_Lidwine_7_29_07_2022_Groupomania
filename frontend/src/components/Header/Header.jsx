import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserDetails } from "../../store/UserAction";
import { logout } from "../../store/UserSlice";
import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.scss";

const Header = () => {

  return ( 
    <header className={css.header}>
    <Logo/>
      <Navigation/>
    </header>
  );
};
export default Header;

