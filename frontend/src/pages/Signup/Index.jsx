import React from "react";
import { NavLink } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import axios from ".././../../axiosInstance";

import image from "./perif_paris.jpg";
import Logo from "../../components/Logo";
import css from "./Signup.module.scss";

const regexPassword = /(?=.*[A-Z])(?=.*[a-z])([0-9])/;
const regexName = /^([A-Za-z]{3,20}-{0,1})?([A-Za-z]{3,20})$/;
const validSchema = Yup.object().shape({
  email: Yup.string()
    .email("email invalide, une adresse valide doit avoir un @ et .")
    .required("l'email est obligatoire"),

  password: Yup.string()
    .required("Mot de passe est obligatoire")
    .matches(
      regexPassword,
      "Au moins une majuscule, une minuscule, un chiffre entier"
    )
    .min(8, "Votre mot de passe doit contenir minimum 8 caractères")
    .max(50, "Votre mot de passe doit être plus petit que 50 caractères"),

  firstname: Yup.string()
    .matches(regexName, "chiffre interdit pour le nom")
    .min(1, "Nom trop petit!")
    .max(50, "Nom trop long!"),

  lastname: Yup.string()
    .matches(regexName, "chiffre interdit pour le prénom")
    .min(1, "Prénom trop petit!")
    .max(50, "Prénom trop long!"),

  grade: Yup.string().min(1, "trop petit!").max(50, "trop long!"),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validSchema),
  });

  const [resStatus, setResStatus] = useState("");

  const onSubmitHandler = (data) => {
    console.log(data);
    axios
      .post("auth/signup", data)
      .then(function (response) {
        console.log(response.status);
        if (response.status === 200) {
          setResStatus("Enregistrement réussi!");
        } else {
          setResStatus("error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(resStatus);

  return (
    <main className={css.containerSignup}>
      <img
        src={image}
        alt="Périphérique Parisien tombé du jour"
        className={css.imgSignup}
      />
      <section className={css.boxSignup}>
        <Logo className={css.logo} />

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <h1>Création de Compte</h1>
          <p>Attention un seul compte par adresse email !!!</p>

          <div className={css.formGroup}>
            <label htmlFor="email">Adresse email *</label>
            <input
              {...register("email")}
              className={`email ${
                errors.email ? "is-invalid" : ""
              }`}
              type="email"
              placeholder="exemple: dupont@gmail.com"
              required
              autoFocus
            />
            <div className={css.invalidFeedback}>{errors.email?.message}</div>
            <span className={css.infos}>
              Doit comporter @ et . (.com ou .fr ....)
            </span>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="password">Mot de passe *</label>
            <input {...register("password")}
              className={`password ${
                errors.password ? "is-invalid" : ""
              }`}
              type="text"
              placeholder="exemple: Motdepasse01"
              required
            />
            <div className={css.invalidFeedback}>{errors.password?.message}</div>
            <span className={css.infos}>
              Minimum : 1 majuscule, 1 minuscule, 1 chiffre, 8 caractères
            </span>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="pseudo">Pseudo *</label>
            <input
               {...register("pseudo")}
              className={`pseudo ${
                errors.pseudo ? "is-invalid" : ""
              }`}
              type="text"
              placeholder="exemple: Pierrot34"
              required
            />
            <div className={css.invalidFeedback}>{errors.pseudo?.message}</div>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="lastName">Prénom</label>
            <input
               {...register("lastName")}
              className={`lastName ${
                errors.lastName ? "is-invalid" : ""
              }`}
              type="text"
              placeholder="exemple: Pierre"
            />
            <div className={css.invalidFeedback}>{errors.lastName?.message}</div>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="firstName">Nom</label>
            <input
              {...register("firstName")}
              className={`firstName ${
                errors.firstName ? "is-invalid" : ""
              }`}
              type="text"
              placeholder="exemple: Dupont"
            />
            <div className={css.invalidFeedback}>{errors.firstName?.message}</div>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="grade">Poste dans l'entreprise</label>
            <input
              {...register("grade")}
              className={`grade ${
                errors.grade ? "is-invalid" : ""
              }`}
              type="text"
              placeholder="exemple: Secrétaire"
            />
            <div className={css.invalidFeedback}>{errors.grade?.message}</div>
          </div>

          <p>* Champs obligatoires</p>
          <button className={css.btn} type="submit">
            <NavLink to="/Newsfeed" className={css.texte}>
              Créer un compte
            </NavLink>
          </button>
        </form>
      </section>
    </main>
  );
};

export default Signup;
