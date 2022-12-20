import React from "react";
import Logo from "../../components/Logo/Logo";
import css from "./Error.module.scss";

const ErrorPage = () => {
  

  return (
    <div id="error-page">
    <Logo/>
      <h1>Oops!</h1>
      <p>Une erreur est survenue</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
export default ErrorPage;
