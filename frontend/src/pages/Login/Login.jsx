import React from "react";
//import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import image from "./homme_tour_controle.jpg";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faEye } from '@fortawesome/free-solid-svg-icons'
import css from "./Login.module.scss";

const Login = () => {

  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexPassword = /(?=.*[A-Z])(?=.*[a-z])([0-9])/;
  const validSchema = Yup.object({
    email: Yup.string()
    .email()
      .required("tu as tout faux")
      //.matches(regexEmail, "Adresse email * (doit comporter @ et .(. com, .fr ...))")
      .min (5, "email trop petit!")
      .max(50, "email trop long!"),
  
    password: Yup.string()
      .required("tu as tout nul")
      //.matches(regexPassword, "mini 1 maj 1 min 1 chiffre 8 caractères")
      .min (8, "password trop petit!")
      .max(50, "password trop long!"),
    });
    const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(validSchema)
    });
    
  
    const onLoginForm = async (data) => {
      try {
        await axios
          .post(`${import.meta.env.VITE_URL_BACK}/auth/login`, data)
          .then(function (res) {
            if (res.status === 200 || res.status === 201) {
              localStorage.setItem("token", res.data.token);
            }
            console.log(res.data);
            return res;
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (error) {
        setError(
          
          `Oops! ${error.message}`
        );
      }
    };
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
          <form onSubmit={handleSubmit(onLoginForm)}>
            <h1>Bienvenue sur votre réseau social d'entreprise</h1>
            <p>Connectez-vous</p>
            <div className={css.formGroup}>
            <label htmlFor="email">
              Adresse email *
              <input
              autoFocus
                id="email"
                placeholder="exemple test@gmail.com"
                type="text"
                {...register("email")}
                //value={email}
              />
            </label>
            <p>{errors.email?.message}</p>
          </div>

            <div className={css.formGroup}>
            <label htmlFor="password">
              Mot de passe *
              <input
                id="password"
                placeholder="exemple Motdepasse03"
                type="password"
                {...register("password")}
              />
            </label>
            <p>{errors.password?.message}</p>
          </div>

            <button className={css.btn} type="submit">
              Connexion
            </button>
          </form>
          <p>
            <Link to="/Signup" className={css.lienSignup}>
              Pas de compte ? Cliquez ici pour créer un compte
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
//<i className={css.fas, css.fa-eye}></i>
//<NavLink to='/' className={(nav) => (nav.isActive ? "css.nav-active" : "")}></NavLink>
//<button id={css.btnEye} className={(nav) => (nav.isActive ? "css.nav-active" : "")}>
//<FontAwesomeIcon icon={faEye} className={css.eye} />
//</button>
