import React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import image from "./homme_tour_controle.jpg";
import eye from "../../assets/img/eye.svg";
import eyeSlash from "../../assets/img/eyeSlash.svg";
import css from "./Login.module.scss";
import { loginUser } from "../../store/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexPassword =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\w\d\s:])([^\s]){8,50}$/gm;
const validSchema = Yup.object({
  email: Yup.string()
    .email("doit comporter @ et .(. com, .fr ...)")
    .required("adresse email obligatoire")
    .matches(
      regexEmail,
      "Adresse email * (doit comporter @ et .(. com, .fr ...))"
    )
    .min(5, "email trop petit!")
    .max(50, "email trop long!"),

  password: Yup.string()
    .required("tu as tout nul")
    .matches(regexPassword, "mini 1 maj 1 min 1 chiffre 8 caractères")
    .min(8, "password trop petit!")
    .max(50, "password trop long!"),
});
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validSchema),
  });

  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // redirect authenticated user to home
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      navigate("/Home");
    }
  }, [navigate, userInfo]);
  const onLoginForm = async (data) => {
    dispatch(loginUser(data));
    console.log(data);
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
              <label htmlFor="password" className="label">
                Mot de passe *
                <input
                  id="password"
                  placeholder="exemple Motdepasse03"
                  type="text"
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
