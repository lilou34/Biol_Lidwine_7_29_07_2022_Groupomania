import React from "react";
import Navigation from "../../components/Navigation";
import Logo from "../Logo";
import css from "./header.module.scss";
const Header = () => {
  return (
    <header className={css.header} >
      <Logo/>
      <Navigation />
    </header>
  );
};

export default Header;
