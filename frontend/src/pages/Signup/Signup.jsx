import React, { isValidElement } from "react";
import { NavLink } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import image from "./perif_paris.jpg";
import Logo from "../../components/Logo/Logo";
import css from "./Signup.module.scss";

const Signup = () => {
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regexPassword = /(?=.*[A-Z])(?=.*[a-z])([0-9])/;
  const regexText = ("^[a-z]+[ \-']?[[a-z]+[ \-']?]*[a-z]+$", "gi")
  ;
  const validSchema = Yup.object().shape({
    email: Yup.string()
      .email("email invalide, une adresse valide doit avoir un @ et .")
      .required("l'email est obligatoire")
      .typeError("un email valide contient @ et .")
      .max(255, "email trop long"),

    password: Yup.string()
      .required("Mot de passe est obligatoire")
      .matches(regexPassword)
      .min(8, "Votre mot de passe doit contenir minimum 8 caractères")
      .max(50, "Votre mot de passe doit être plus petit que 50 caractères")
      .typeError(
        "min. 8 caractères dont min. 1 majuscule 1 minuscule 1 chiffre"
      ),

    firstname: Yup.string()
      .matches(regexText)
      .typeError("pas de chiffre ou caratères spéciaux")
      .min(1, "Nom trop petit!")
      .max(50, "Nom trop long!"),

    lastname: Yup.string()
      .matches(regexText)
      .typeError("pas de chiffre ou caratères spéciaux")
      .min(1, "Prénom trop petit!")
      .max(50, "Prénom trop long!"),

    grade: Yup.string()
      .matches(regexText)
      .min(1, "trop petit!")
      .max(50, "trop long!")
      .typeError("pas de chiffres ou caratères spéciaux"),
  });
  
  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(validSchema) });
  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [grade, setGrade] = useState("");*/

  const onSubmit = async () => {
    const data = {
      email: email,
      password: password,
      pseudo: pseudo,
      lastName: lastName,
      firstName: firstName,
      grade: grade,
    };
    try {
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
      setError(
        "submit",
        "submitError",
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
        <form>
          <Controller
            control={control}
            name="email"
            render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
              <div className={css.formGroup}>
                <label htmlFor="email">
                  Adresse email * (doit comporter @ et .(. com, .fr ...))
                </label>
                <input
                  value={value}
                  className={css.email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="exemple: dupont@gmail.com"
                  autoFocus
                  //onChange={(e) => setEmail(e.target.value)}
                  onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              errorDetails={error?.message}
              
                  //value={email}
                  
                />
                
              </div>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <div className={css.formGroup}>
                <label htmlFor="password">Mot de passe *</label>
                <input
                  className={css.password}
                  type="text"
                  name="password"
                  id="password"
                  placeholder="exemple: Motdepasse01"
                  //onChange={(e) => setPassword(e.target.value)}
                  {...register("password", {
                    required: true,
                    pattern: regexPassword,
                  })}
                  disabled={isSubmitting}
                />
                {errors.password && (
                  <p className={css.infos}>entrée fausse</p>
                )}
              </div>
            )}
          />

          <Controller
            control={control}
            name="pseudo"
            render={({ field: { onChange, value } }) => (
              <div className={css.formGroup}>
                <label htmlFor="pseudo">Pseudo</label>
                <input
                  className={css.pseudo}
                  type="text"
                  name="pseudo"
                  id="pseudo"
                  placeholder="exemple: Pierrot34"
                  //onChange={(e) => setPseudo(e.target.value)}
                  {...register("pseudo", { pattern: regexText })}
                  disabled={isSubmitting}
                />
                {errors.pseudo && (
                  <p className={css.infos}>{errors.pseudo.message}</p>
                )}
              </div>
            )}
          />

          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, value } }) => (
              <div className={css.formGroup}>
                <label htmlFor="lastName">Prénom</label>
                <input
                  className={css.lastName}
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="exemple: Pierre"
                  //onChange={(e) => setLastName(e.target.value)}
                  {...register("lastName", { pattern: regexText })}
                  disabled={isSubmitting}
                />
                {errors.lastName && (
                  <p className={css.infos}>entrée fausse</p>
                )}
              </div>
            )}
          />

          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, value } }) => (
              <div className={css.formGroup}>
                <label htmlFor="firstName">Nom</label>
                <input
                  className={css.firstName}
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="exemple: Dupont"
                  //onChange={(e) => setFirstName(e.target.value)}
                  {...register("fistName", { pattern: regexText })}
                  disabled={isSubmitting}
                />
                {errors.firstName && (
                  <p className={css.infos}>entrée fausse</p>
                )}
              </div>
            )}
          />

          <Controller
            control={control}
            name="grade"
            render={({ field: { onChange, value } }) => (
              <div className={css.formGroup}>
                <label htmlFor="grade">Poste dans l'entreprise</label>
                <input
                  className={css.grade}
                  type="text"
                  name="grade"
                  id="grade"
                  placeholder="exemple: Secrétaire"
                  //onChange={(e) => setGrade(e.target.value)}
                  {...register("grade", { pattern: regexText })}
                  disabled={isSubmitting}
                />
                {errors.grade && (
                  <p className={css.infos}>entrée fausse</p>
                )}
              </div>
            )}
          />

          <p>* Champs obligatoires</p>
          {
            errors && (<p>Merci de remplir correctement tous les champs</p>)
          }
          <button className={css.btn} type="button" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
            
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
