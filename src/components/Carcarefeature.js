import React from "react";

export const Carcarefeature = ({ title, description, icon }) => (
  <div
    
    className="auth0-feature"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 className="auth0-feature__headline">
      <img
        className="auth0-feature__icon"
        src={icon}
        alt="external link icon"
      />
      {title}
    </h3>
    <p className="auth0-feature__description">{description}</p>
  </div>
);
