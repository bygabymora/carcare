import React from "react";
import { NavLink } from "react-router-dom";
import NavLogo from './navBarLogo.png';

export const MobileNavBarBrand = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <NavLink to="/">
        <img
          className=''
          src={NavLogo}
          alt="Car Care"
          width="50"
          height="50"
        />
      </NavLink>
    </div>
  );
};
