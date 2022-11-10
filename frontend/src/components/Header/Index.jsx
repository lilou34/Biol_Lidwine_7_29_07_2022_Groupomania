import React from "react";
import Navigation from "../../components/Navigation";
import Logo from "../Logo";

const Header = () => {
  return (
    <header>
      <Logo className="logo" />
      <Navigation />
    </header>
  );
};

export default Header;
