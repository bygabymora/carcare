import React from "react";
import heroBannerLogo from '../assets/images/heroBannerLogo.png'
import { useAuth0 } from "@auth0/auth0-react";
import { SignupButton } from "./buttons/signup-button";

export const HeroBanner = () => {

  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return (
    <div className="hero-banner hero-banner--blue-aqua">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={heroBannerLogo} alt="Car Care logo" />
      </div>
      <h1 className="hero-banner__headline">¡Hola!</h1>
      <p className="hero-banner__description">
        <strong>Car Care</strong> te ayudará a tener el control sobre los mantenimientos de tus automóviles.
      </p>
      <SignupButton/>
    </div>
  );
};
