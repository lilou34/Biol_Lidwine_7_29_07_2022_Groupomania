import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import css from "./Header.module.scss";
function Header(){
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
      
    </header>
  );
};

export default Header;
