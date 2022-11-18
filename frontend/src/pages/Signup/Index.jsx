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

console.log(validSchema);
const Signup = () => {
  //désactive le bouton d'envoi tant que le formulaire n'est pas correcetement rempli
  const {
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
    console.log(data);

    if (response.status === 200) {
      axios({
        url: "auth/signup",
        method: "POST",
      }).then((res) => console.log("enregistrement de user dans bdd"));
      setResStatus("Enregistrement réussi!");
    } else {
      setResStatus("error");
    }
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
              className={`email ${
                errors.email ? "is-invalid" : "email ivalide"
              }`}
              type="email"
              placeholder="exemple: dupont@gmail.com"
              autoFocus
              {...register("email")}
            />
            <div className={css.invalidFeedback}>{errors.email?.message}</div>
            <span className={css.infos}>
              Doit comporter @ et . (.com ou .fr ....)
            </span>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="password">Mot de passe *</label>
            <input
              className={`password ${
                errors.password ? "is-invalid" : "mot de passe invalide"
              }`}
              type="text"
              placeholder="exemple: Motdepasse01"
              {...register("password")}
            />
            <div className={css.invalidFeedback}>
              {errors.password?.message}
            </div>
            <span className={css.infos}>
              Minimum : 1 majuscule, 1 minuscule, 1 chiffre, 8 caractères
            </span>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="pseudo">Pseudo</label>
            <input
              className={`pseudo ${
                errors.pseudo ? "is-invalid" : "pseudo invalide"
              }`}
              type="text"
              placeholder="exemple: Pierrot34"
              {...register("pseudo")}
            />
            <div className={css.invalidFeedback}>{errors.pseudo?.message}</div>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="lastName">Prénom</label>
            <input
              className={`lastName ${
                errors.lastName ? "is-invalid" : "prénom invalide"
              }`}
              type="text"
              placeholder="exemple: Pierre"
              {...register("lastName")}
            />
            <div className={css.invalidFeedback}>
              {errors.lastName?.message}
            </div>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="firstName">Nom</label>
            <input
              className={`firstName ${
                errors.firstName ? "is-invalid" : "nom invalide"
              }`}
              type="text"
              placeholder="exemple: Dupont"
              {...register("firstName")}
            />
            <div className={css.invalidFeedback}>
              {errors.firstName?.message}
            </div>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="grade">Poste dans l'entreprise</label>
            <input
              className={`grade ${
                errors.grade ? "is-invalid" : "grade invalide"
              }`}
              type="text"
              placeholder="exemple: Secrétaire"
              {...register("grade")}
            />
            <div className={css.invalidFeedback}>{errors.grade?.message}</div>
          </div>

          <p>* Champs obligatoires</p>
          <button className={css.btn} type="submit" disabled={isSubmitting}>
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
