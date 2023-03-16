import React from "react";
import { SignupButton } from "./buttons/signup-button";
import { PageFooterHyperlink } from "./page-footer-hyperlink";
import Logo from '../assets/images/heroBannerLogo.png'
export const PageFooter = () => {
  const resourceList = [
    {
      path: "",
      label: "Contáctanos",
    },
    {
      path: "",
      label: "Cliente empresarial",
    },
    {
      path: "",
      label: "Síguenos en redes sociales",
    },
    {
      path: "",
      label: "Blog",
    },
   
  ];

  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>Esta aplicación fue creada </span>
              <PageFooterHyperlink path="https://bygabymora.com/">
                By Gaby Mora
              </PageFooterHyperlink>
            </p>
          </div>
          <div className="page-footer-info__button">
            <SignupButton/>
          </div>
          <div className="page-footer-info__resource-list">
            {resourceList.map((resource) => (
              <div
                key={resource.path}
                className="page-footer-info__resource-list-item"
              >
                <PageFooterHyperlink path={resource.path}>
                  {resource.label}
                </PageFooterHyperlink>
              </div>
            ))}
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <img
              className="page-footer-brand__logo"
              src={Logo}
              alt="CarCare Tracker"
            />
            <PageFooterHyperlink path="https://bygabymora.com/">
              Car Care Tracker
            </PageFooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
