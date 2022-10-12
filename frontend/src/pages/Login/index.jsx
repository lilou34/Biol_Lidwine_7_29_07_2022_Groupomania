import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo";

import image from "./homme_tour_controle.jpg";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="container-login">
      <section className="imageLogin">
        <img
          src={image}
          alt="Homme debout dans une tour de controle vide"
          className="img-login"
        />
      </section>
      <section className="box-login">
        <div className="box-login-container ">
          <Logo className="logo" />
          <form id="form-login" method="post" action="#">
            <h1>Bienvenue sur votre réseau social d'entreprise</h1>
            <p>Connectez-vous</p>
            <div className="form-group">
              <label htmlFor="email">Adresse email</label>
              <input
                className="name form-control"
                type="email"
                placeholder="exemple: dupont@gmail.com"
                required
                autoFocus
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                className="password form-control"
                id="password"
                type="text"
                placeholder="exemple: Motdepasse01"
                required
              />
              <button id="btnEye">
                <i className="fas fa-eye" id="eye"></i>
              </button>
            </div>
            <button className="btn" type="submit">
              <NavLink to="/" className="texte">
                Connexion
              </NavLink>
            </button>
          </form>
          <p>
            <NavLink to="/Signup" className="lien-signup">
              Pas de compte ? Cliquez ici pour créer un compte
            </NavLink>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
