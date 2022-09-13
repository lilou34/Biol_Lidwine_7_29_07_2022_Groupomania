import React from 'react';
import Navigation from '../../components/Navigation';
import logo from "./icon-left-font_preview_rev_1.png";
const Header = () => {
    return (
        <div>
            <img src={logo} className= "logo" />     
      <Navigation />
        </div>
    );
}

export default Header;