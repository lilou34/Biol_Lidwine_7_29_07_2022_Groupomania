import React from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import image from "./perif_paris.jpg";
import Logo from "../../components/Logo/Logo";
import css from "./Signup.module.scss";
import { registerUser } from "../../store/UserAction";
//////////////validation des input selon shema yup avec regex///////////
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

  firstname: Yup.string()
    .matches(regexText, "les chiffres et caractères spéciaux sont interdits")
    .min(2, "Nom trop petit!")
    .max(50, "Nom trop long!"),

  lastname: Yup.string()
    .matches(regexText, "les chiffres et caractères spéciaux sont interdits")
    .min(2, "préom trop petit!")
    .max(50, "préom trop long!"),

  grade: Yup.string()
    .matches(regexText, "les chiffres et caractères spéciaux sont interdits")
    .min(2, "grade trop petit!")
    .max(50, "grade trop long!"),
});
/////////////////////////formulaire d'enregistrement user validation avec rect hook formet logique d'envoi au back/////////////
const Signup = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validSchema),
  });
  const navigate = useNavigate();
  const [customError, setCustomError] = useState(null);
  useEffect(() => {
    
    if (success) navigate("/Home");
    //if (success) navigate("/Home");
  }, [navigate, userInfo, success]);

  const submitForm = (data) => {
    dispatch(registerUser(data));
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
        <form onSubmit={handleSubmit(submitForm)}>
          {error && <Error>{error}</Error>}
          {customError && <Error>{customError}</Error>}
          <div className={css.formGroup}>
            <label htmlFor="email">
              Adresse email *
              <input
                autoFocus
                id="email"
                className="form-input"
                placeholder="exemple test@gmail.com"
                type="email"
                {...register("email")}
              />
            </label>
            <p>{errors.email?.message}</p>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="password">
              Mot de passe *
              <input
                id="password"
                className="form-input"
                placeholder="exemple Motdepasse03"
                type="password"
                {...register("password")}
              />
            </label>
            <p>{errors.password?.message}</p>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="pseudo">
              Pseudo
              <input
                id="pseudo"
                className="form-input"
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
                className="form-input"
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
                className="form-input"
                placeholder="exemple: Dupont"
                {...register("firstName")}
              />
            </label>
            <p>{errors.fistName?.message}</p>
          </div>

          <div className={css.formGroup}>
            <label htmlFor="grade">
              Poste dans l'entreprise
              <input
                id="grade"
                className="form-input"
                placeholder="exemple: Secrétaire"
                {...register("grade")}
              />
            </label>
            <p>{errors.grade?.message}</p>
          </div>

          <p>* Champs obligatoires</p>

          <button className={css.btn} type="submit" disabled={loading}>
            s'incrire
          </button>
        </form>
      </section>
    </main>
  );
};

export default Signup;
/* //<NavLink to="/Home" className={css.texte}>
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
