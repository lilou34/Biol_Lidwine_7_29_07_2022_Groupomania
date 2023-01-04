import axios from "axios";
import React from "react";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import css from "./Profil.module.scss";
import { AuthContext } from "../../utils/context/Auth";

function Profil() {
  const authContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(null);
  const [profil, setProfil] = useState(null);
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
        setProfil(response.data.user);
      }
    } catch {
      console.log("problème");
    }
    setIsLoading(false);
  }
  useEffect(() => {
    getUser();
  }, []);
  if (isLoading) {
    return (
      <main className={css.mainProfil}>
        <Header />
        <h2>CHARGEMENT ........</h2>
      </main>
    );
  } else {
    return (
      <main className={css.mainProfil}>
        <Header />
        <h2>Bonjour{setProfil.pseudo}</h2>
      </main>
    );
  }
}
export default Profil;
