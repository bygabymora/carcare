import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getProtectedResource } from "../services/message.service";

export const ProtectedPage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const { data, error } = await getProtectedResource();

      if (!isMounted) {
        return;
      }

      if (data) {
        setMessage(JSON.stringify(data, null, 2));
      }

      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Página protegida.
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              Esta página puede ser de control para los administradores de Car Care o para enviar algún tipo específico de mensaje.
            </span>
            <span>
              <strong>Sólo personas autorizadas tienen ingreso a esta página.</strong>
            </span>
          </p>
          <CodeSnippet title="Mensaje protegido" code={message} />
        </div>
      </div>
    </PageLayout>
  );
};
