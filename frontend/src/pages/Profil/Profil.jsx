import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { AuthContext } from "../../utils/context/Auth";
import Header from "../../components/Header/Header";
import css from "./Profil.module.scss";
import avatar from '../../assets/imgProfil/blank-avatar.webp';

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
    .min(2, "prénom trop petit!")
    .max(50, "prénom trop long!"),

  grade: Yup.string()
    .matches(regexText, "les chiffres et caractères spéciaux sont interdits")
    .min(2, "grade trop petit!")
    .max(50, "grade trop long!"),
});
function Profil() {
  //récupérer id de l'adresse
  // const lsId = JSON.parse(localStorage.getItem("userId"));
  // console.log(lsId);
  const authContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [userProfil, setUserProfil] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  async function getUser() {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_BACK}/auth/${authContext.userId}`,
        {
          headers: {
            Authorization: `Bearer ${authContext.token}`,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        console.log(response.data.user);
        setUserProfil(response.data.user);
      }
    } catch {
      console.log("problème");
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getUser();
  }, []);
  //const params = useParams();
  //console.log(params.value);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validSchema),
  });
  const onSubmitForm = async (dataForm) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_URL_BACK}/auth/${authContext.userId}`,
        {
          headers: {
            Authorization: `Bearer ${authContext.token}`,
          }, dataForm
        }
      );
      console.log(response);
      if (response.status === 200) {
        
        
        getUser();
      }
    } catch {
      console.log("problème");
    }
  };
  if (isLoading) {
    return (
      <main className={css.mainProfil}>
        <Header />
        <h2>CHARGEMENT ........</h2>
      </main>
    );
  }
  if (userProfil) {
    return (
      <main className={css.mainProfil}>
        <Header />
        {isEditing ? (
          <div>
            <h2>Bonjour {userProfil.pseudo}</h2>
            {/* affichage classique pour tous et affichage formulaire pour user et ensuite admin bouton qui permet mode édition*/}

            <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className={css.formGroup}>
            <label htmlFor="email">
              Adresse email *
              <input
                autoFocus
                id="email"
                placeholder={userProfil.email}
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
                placeholder={userProfil.password}
                type="text"
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
                placeholder={userProfil.pseudo}
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
                placeholder={userProfil.lastName}
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
                placeholder={userProfil.fistName}
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
                placeholder={userProfil.grade}
                {...register("poste")}
              />
            </label>
            <p>{errors.poste?.message}</p>
          </div>

          <button className={css.btn} type="submit">
            modifier
          </button>
          
        </form>
      
          </div>
        ) : (
          <div>
            {/* affichage classique */}
            
            <img
              source= {avatar}
              alt="image de l'utilisateur"
            />
            <p>pseudo : {userProfil.pseudo}</p>
            <p>prénom : {userProfil.lastName}</p>
            <p>nom : {userProfil.firstname}</p>
            <p>profession : {userProfil.grade}</p>
            <p>role : {userProfil.role}</p>

            {authContext.userId == userProfil.id && (
              <button className={css.btn} onClick={() => setIsEditing(true)}>
                éditer
              </button>
            )}
          </div>
        )}
      </main>
    );
  }
}
export default Profil;
