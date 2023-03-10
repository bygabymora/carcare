import React from "react";
import { Carcarefeature } from "./Carcarefeature";

export const Carcarefeatures = () => {
  const featuresList = [
    {
      title: "Registra el número de vehículos que desees.",
      description:
        "Car Care soporta el número de vehiculos que necesites, puedes llevar control de todos los carros de tu hogar o empresa para tener control sobre sus mantenientos.",
      icon: "https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg",
    },
    {
      title: "Dale acceso a los usuarios clave.",
      description:
        "Aquellas personas que manejen los automóviles registrados, tendran acceso a la información y podrán generar nuevos registros.",
       icon: "https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg",
    },
    {
      title: "Recibe alertas tempranas.",
      description:
        "Car Care se encargará de avisarte cuando debas hacer una revisión, mantenimiento, si el consumo de gasolina baja, etc...",
      icon: "https://cdn.auth0.com/blog/hello-auth0/advanced-protection-logo.svg",
    },
    {
      title: "Toda la información al alcance de tus dedos.",
      description:
        "Toda esta información sincronizada para que la tengas en tus dispositivos, o disponibles en la web en cualquier momento.",
       icon: "https://cdn.auth0.com/blog/hello-auth0/private-cloud-logo.svg",
    },
  ];

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">Lleva el mantenimiento de tu vehículo a otro nivel.</h2>
      <div className="auth0-features__grid">
        {featuresList.map((feature) => (
          <Carcarefeature
            key={feature.resourceUrl}
            title={feature.title}
            description={feature.description}
            resourceUrl={feature.resourceUrl}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};
