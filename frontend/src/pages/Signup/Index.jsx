import React from "react";
import { NavLink } from "react-router-dom";

//import { useForm } from "react-hook-form";
import { useState } from "react";

//import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import axios from "axios";

import image from "./perif_paris.jpg";
import Logo from "../../components/logo";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [grade, setGrade] = useState("");

  const data = {
    email: setEmail.value,
    password: setPassword.value,
    firstName: setFirstName.value,
    lastName: setLastName.value,
    grade: setGrade.value,
  };
  try {
    axios
      .post('http://localhost:3330/api/auth/signup', data)
      .then(function (res) {
        if (res.status === 200 || res.status === 201) {
          localStorage.setItem("token", res.data.token);
        }
        return res;
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {}

  return (
    <main className={css.containerSignup}>
      <img
        src={image}
        alt="Périphérique Parisien tombé du jour"
        className={css.imgSignup}
      />
      <section className={css.boxSignup}>
        <Logo className={css.logo} />
        <form>
          <h1>Création de Compte</h1>
          <p>Attention un seul compte par adresse email !!!</p>
          <div className={css.formGroup}>
            <label htmlFor="email">Adresse email *</label>
            <input
              className={css.email}
              type="email"
              placeholder="exemple: dupont@gmail.com"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className={css.infos}>
              Doit comporter @ et . (.com ou .fr ....)
            </span>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="password">Mot de passe *</label>
            <input
              className={css.password}
              type="text"
              placeholder="exemple: Motdepasse01"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className={css.infos}>
              Minimum : 1 majuscule, 1 minuscule, 1 chiffre, 8 caractères
            </span>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="pseudo">Pseudo</label>
            <input
              className={css.pseudo}
              type="text"
              placeholder="exemple: Pierrot34"
              onChange={(e) => setPseudo(e.target.value)}
            />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="lastName">Prénom</label>
            <input
              className={css.lastName}
              type="text"
              placeholder="exemple: Pierre"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="firstName">Nom</label>
            <input
              className={css.firstName}
              type="text"
              placeholder="exemple: Dupont"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="grade">Poste dans l'entreprise</label>
            <input
              className={css.grade}
              type="text"
              placeholder="exemple: Secrétaire"
              onChange={(e) => setGrade(e.target.value)}
            />
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
/* //désactive le bouton d'envoi tant que le formulaire n'est pas correcetement rempli
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
