import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import css from "./Header.module.scss";
const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
      <h1>TESTTEST</h1>
    </header>
  );
};

export default Header;
