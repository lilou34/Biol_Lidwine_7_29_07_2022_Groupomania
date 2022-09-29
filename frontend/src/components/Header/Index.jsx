import React from "react";
import Navigation from "../../components/Navigation";
import Logo from "../Logo";

const Header = () => {
  return (
    <div>
      <Logo className="logo" />
      <Navigation />
    </div>
  );
};

export default Header;
