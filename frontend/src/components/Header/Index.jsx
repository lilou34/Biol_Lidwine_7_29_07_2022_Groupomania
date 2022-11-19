import React from "react";
import Navigation from "../navigation";
import Logo from "../logo";
import css from "./header.module.scss";
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
