import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import axios from "axios";
import image from "./perif_paris.jpg";
import Logo from "../../components/Logo";
const instance = axios.create({});

const Signup = () => {
  const validSchema = Yup.object().shape({
    email: Yup.string()
      .email("email invalide, une adresse valide doit avoir un @ et .")
      .required("l'email est obligatoire"),
    password: Yup.string()
      .required("Mot de passe est obligatoire")
      .matches(
        /(?=.*[A-Z])(?=.*[a-z])([0-9])/,
        "Au moins une majuscule, une minuscule, un chiffre entier"
      )
      .min(8, "Votre mot de passe doit contenir minimum 8 caractères")
      .max(50, "Votre mot de passe doit être plus petit que 50 caractères"),
    firstname: Yup.string()
      .matches(
        /^([A-Za-z]{3,20}-{0,1})?([A-Za-z]{3,20})$/,
        "chiffre interdit pour le nom"
      )
      .min(1, "Nom trop petit!")
      .max(50, "Nom trop long!"),
    lastname: Yup.string()
      .matches(
        /^([A-Za-z]{3,20}-{0,1})?([A-Za-z]{3,20})$/,
        "chiffre interdit pour le prénom"
      )
      .min(1, "Prénom trop petit!")
      .max(50, "Prénom trop long!"),
    pseudo: Yup.string()
      .required("ce champ est obligatoire")
      .min(1, "trop petit!")
      .max(50, "trop long!"),
    poste: Yup.string().min(1, "trop petit!").max(50, "trop long!"),
  });

  return (
    <main className="container-signup">
      <img
        src={image}
        alt="Périphérique Parisien tombé du jour"
        className="img-signup"
      />
      <section className="box-signup">
        <Logo className="logo" />

        <form id="form-signup" method="post" action="#">
          <h1>Création de Compte</h1>
          <p>Attention un seul compte par adresse email !!!</p>

          <div className="form-group">
            <label htmlFor="email">Adresse email *</label>
            <input
              className="emailInput form-control"
              type="email"
              placeholder="exemple: dupont@gmail.com"
              required
              autoFocus
            />
            <span className="infos">
              Doit comporter @ et . (.com ou .fr ....)
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe *</label>
            <input
              className="password form-control"
              type="text"
              placeholder="exemple: Motdepasse01"
              required
            />
            <span className="infos">
              Minimum : 1 majuscule, 1 minuscule, 1 chiffre, 8 caractères
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="pseudo">Pseudo *</label>
            <input
              className="pseudo form-control"
              type="text"
              placeholder="exemple: Pierrot34"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Prénom</label>
            <input
              className="lastName form-control"
              type="text"
              placeholder="exemple: Pierre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstname">Nom</label>
            <input
              className="firstname form-control"
              type="text"
              placeholder="exemple: Dupont"
            />
          </div>

          <div className="form-group">
            <label htmlFor="poste">Poste dans l'entreprise</label>
            <input
              className="poste form-control"
              type="text"
              placeholder="exemple: Secrétaire"
            />
          </div>

          <p>* Champs obligatoires</p>
          <button className="btn" type="submit">
            <NavLink to="/Newsfeed" className="texte">
              Créer un compte
            </NavLink>
          </button>
        </form>
      </section>
    </main>
  );
};

export default Signup;
