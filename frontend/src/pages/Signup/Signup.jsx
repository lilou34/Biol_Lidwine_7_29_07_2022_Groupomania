import React, { useContext, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import image from "./perif_paris.jpg";
import Logo from "../../components/Logo/Logo";
import css from "./Signup.module.scss";
import { AuthContext } from "../../utils/context/Auth";

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexPassword =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\w\d\s:])([^\s]){8,50}$/gm;
const regexText = /^[a-zÀ-ÖØ-öø-ÿ -]+$/i;
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

    pseudo: Yup.string()
    .required("pseudo obligatoire")
    .min(2, "pseudo trop petit!")
    .max(50, "pseudo trop long!"),

  firstname: Yup.string()
    .matches(regexText, "les chiffres et caractères spéciaux sont interdits")
    .min(2, "Nom trop petit!")
    .max(50, "Nom trop long!"),

  lastname: Yup.string()
    .matches(regexText, "les chiffres et caractères spéciaux sont interdits")
    .min(2, "prénom trop petit!")
    .max(50, "prénom trop long!"),

  grade: Yup.string()
    .matches(regexText, "les chiffres et caractères spéciaux sont interdits")
    .min(2, "grade trop petit!")
    .max(50, "grade trop long!"),
});

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validSchema),
  });

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmitForm = async (dataForm) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_URL_BACK}/auth/signup`,
        dataForm
      );
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("userId", JSON.stringify(response.data.userId));
        localStorage.setItem("admin", JSON.stringify(response.data.admin));
        authContext.loginHandler();
        navigate("/Newsfeed");
      }
    } catch (error) {
      console.log("problème");
      console.log(error);
    }
  };

  return (
    <main className={css.containerSignup}>
      <img
        src={image}
        alt="Périphérique Parisien tombé du jour"
        className={css.imgSignup}
      />
      <section className={css.boxSignup}>
        <Logo className={css.logo} />
        <h1>Création de Compte</h1>
        <p>Attention un seul compte par adresse email !!!</p>
        <form onSubmit={handleSubmit(onSubmitForm)}>
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

          <div className={css.formGroup}>
            <label htmlFor="pseudo">
              Pseudo *
              <input
                id="pseudo"
                placeholder="exemple: Pierrot34"
                {...register("pseudo")}
              />
            </label>
            <p>{errors.pseudo?.message}</p>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="lastName">
              Prénom
              <input
                id="lastName"
                placeholder="exemple: Pierre"
                {...register("lastName")}
              />
            </label>
            <p>{errors.lastName?.message}</p>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="firstName">
              Nom
              <input
                id="firstName"
                placeholder="exemple: Dupont"
                {...register("firstName")}
              />
            </label>
            <p>{errors.fistName?.message}</p>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="poste">
              poste
              <input
                id="poste"
                placeholder="exemple: comptable"
                {...register("poste")}
              />
            </label>
            <p>{errors.poste?.message}</p>
          </div>

          <button className={css.btn} type="submit">
            s'incrire
          </button>
          <p>* Champs obligatoires</p>
          <Link to="/" className={css.lienSignup}>
            déjà inscrit ? cliquez ici pour vous connecter
          </Link>
        </form>
      </section>
    </main>
  );
}
export default Signup;