import React from "react";
//import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo";

import image from "./homme_tour_controle.jpg";
import css from "./Login.module.scss";
const Login = () => {
  //const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <main className={css.containerLogin}>
      <section className={css.imageLogin}>
        <img
          src={image}
          alt="Homme debout dans une tour de controle vide"
          className={css.imgLogin}
        />
      </section>
      <section className={css.boxLogin}>
        <div className={css.boxLoginContainer}>
          <Logo className={css.logo} />
          <form id="form-login" method="post" action="#">
            <h1>Bienvenue sur votre réseau social d'entreprise</h1>
            <p>Connectez-vous</p>
            <div className={css.formGroup}>
              <label htmlFor="email">Adresse email</label>
              <input
                className={(css.name, css.formControl)}
                type="email"
                placeholder="exemple: dupont@gmail.com"
                required
                autoFocus
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="password">Mot de passe</label>
              <input
                className={(css.password, css.formControl)}
                id="password"
                type="text"
                placeholder="exemple: Motdepasse01"
                required
              />
              <span className={css.infos}>
                Minimum : 1 majuscule, 1 minuscule, 1 chiffre, 8 caractères
              </span>
              <button className={css.btnEye}>
                
              </button>
            </div>
            <button className={css.btn} type="submit">
              <link to="/" className={css.texte}>
                Connexion
              </link>
            </button>
          </form>
          <p>
            <link to="/Signup" className={css.lienSignup}>
              Pas de compte ? Cliquez ici pour créer un compte
            </link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
//<i className={css.fas, css.fa-eye}></i>
//<NavLink to='/' className={(nav) => (nav.isActive ? "css.nav-active" : "")}></NavLink>