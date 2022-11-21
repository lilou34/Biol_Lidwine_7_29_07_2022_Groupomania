import React from "react";
//import { redirect } from "react-router-dom";
import { useState } from "react";
//import { yupResolver } from "@hookform/resolvers/yup";
//import * as Yup from "yup";
import axios from "axios";
import image from "./perif_paris.jpg";
import Logo from "../../components/Logo/Logo";
import css from "./Signup.module.scss";
const Signup = () => {
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regexPassword = /(?=.*[A-Z])(?=.*[a-z])([0-9])/;
  const regexText = ("^[a-z]+[ -']?[[a-z]+[ -']?]*[a-z]+$", "gi");


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [grade, setGrade] = useState("");

  //const inputEmail = useRef(email); 
    const handleEmailChange = (e) => {
      e.preventDefault();
      console.log(e);
      const email = inputEmail.current.value;
      console.log(email);
      if(!email == regexEmail){
        console.log("email pas bon");
      }
    };
    
  
  /*const verification = (e) =>{
      
      const email = e.value
      console.log(currentTarget.value);
      const password = currentTarget.password
      console.log(currentTarget.password);
      const pseudo = currentTarget.pseudo
      console.log(currentTarget.pseudo);
      const firstName = currentTarget.firstName
      console.log(currentTarget.firstName);
      const lastName = currentTarget.lastName
      console.log(currentTarget.lastName);
      const grade = currentTarget.grade
      console.log(currentTarget.grade);

    };*/
  const onSubmit = async () => {
    const data = {
      email: email,
      password: password,
      pseudo: pseudo,
      lastName: lastName,
      firstName: firstName,
      grade: grade,
    };
    console.log(data);
    try {
      if (!validSchema) {
        alert("formulaire mal rempli");
      }
      await axios
        .post(`${import.meta.env.VITE_URL_BACK}/auth/signup`, data)
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
    } catch (error) {
      console.log("erreur req");
    }
  };

  //const redirect = () => {
  //"/NewsFeed"};

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
        <form>
          <h1>Création de Compte</h1>
          <p>Attention un seul compte par adresse email !!!</p>
          <div className={css.formGroup}>
            <label htmlFor="email">Adresse email *</label>
            <input
              className={css.email}
              name="email"
              ref={inputEmail}
              type="email"
              placeholder="exemple: dupont@gmail.com"
              autoFocus
              
              onChange={handleEmailChange}
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
          <button className={css.btn} type="button" onClick={onSubmit}>
            Créer un compte
          </button>
        </form>
      </section>
    </main>
  );
};
export default Signup;
