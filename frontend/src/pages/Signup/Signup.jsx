import React from "react";
import { NavLink } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import image from "./perif_paris.jpg";
import Logo from "../../components/Logo/Logo";
import css from "./Signup.module.scss";

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexPassword = /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*$/;
const regexText = /^[a-zÀ-ÖØ-öø-ÿ -]+$/i;
const validSchema = Yup.object({
  email: Yup.string()
  .email()
    .required("tu as tout faux")
    .matches(regexEmail, "Adresse email * (doit comporter @ et .(. com, .fr ...))")
    .min (5, "email trop petit!")
    .max(50, "email trop long!"),

  password: Yup.string()
    .required("tu as tout nul")
    .matches(regexPassword, "mini 1 maj 1 min 1 chiffre 8 caractères")
    .min (7, "password trop petit!")
    .max(50, "password trop long!"),

    firstname: Yup.string()
    .matches(regexText, "les chiffres et caractères spéciaux sont interdits")
    .min (2, "Nom trop petit!")
    .max(50, "Nom trop long!"),

    lastname: Yup.string()
    .matches(regexText, "les chiffres et caractères spéciaux sont interdits")
    .min (2, "préom trop petit!")
    .max(50, "préom trop long!"),

    grade: Yup.string()
    .matches(regexText, "les chiffres et caractères spéciaux sont interdits")
    .min (2, "grade trop petit!")
    .max(50, "grade trop long!"),

});

const Signup = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(validSchema)
  });
  

  const onSubmitForm = async (data) => {
    try {
      await axios
        .post(`${import.meta.env.VITE_URL_BACK}/auth/signup`, data)
        .then(function (res) {
          if (res.status === 200 || res.status === 201) {
            localStorage.setItem("token", res.data.token);
          }
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
                <label htmlFor="pseudo">Pseudo
                <input
                  id="pseudo"
                  placeholder="exemple: Pierrot34"
                  {...register("pseudo")}
                />
                </label>
                  <p>{errors.pseudo?.message}</p>
              </div>

              <div className={css.formGroup}>
                <label htmlFor="lastName">Prénom
                <input
                  id="lastName"
                  placeholder="exemple: Pierre"
                  {...register("lastName")}
                />
                </label>
                  <p>{errors.lastName?.message}</p>
              </div>
          
              <div className={css.formGroup}>
                <label htmlFor="firstName">Nom
                <input
                  id="firstName"
                  placeholder="exemple: Dupont"
                  {...register("fistName")}
                />
                </label>
                <p>{errors.fistName?.message}</p>
              </div>

              <div className={css.formGroup}>
                <label htmlFor="grade">Poste dans l'entreprise
                <input
                  id="grade"
                  placeholder="exemple: Secrétaire"
                  {...register("grade")}
                />
                </label>
                <p>{errors.grade?.message}</p>
              </div>

          <p>* Champs obligatoires</p>

          <button className={css.btn} type="submit">
            s'incrire
          </button>
        </form>
      </section>
    </main>
  );
};

export default Signup;
/* //<NavLink to="/Newsfeed" className={css.texte}>
    </NavLink>; onClick={axiosFunction} désactive le bouton d'envoi tant que le formulaire n'est pas correcetement rempli
  /*const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [resStatus, setResStatus] = useState("");

  const onSubmitHandler = (data) => {
    console.log(data);        };
*/
