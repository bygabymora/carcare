import React from "react";
import { NavLink } from "react-router-dom";
import NavLogo from '../mobile/navBarLogo.png';

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand" heigth='150'>
      <NavLink to="/" className='textoLogo'>
        <img
          className="nav-bar__logo"
          src={NavLogo}
          alt="CarCare logo"
         
      
        />
        <span> </span>Car Care Tracker
      </NavLink>
    </div>
  );
};
