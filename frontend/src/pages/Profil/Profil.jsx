import axios from "axios";
import React from "react";
import { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import css from "./Profil.module.scss";
import { AuthContext } from "../../utils/context/Auth";

async function Profil() {
  const authContext = useContext(AuthContext);
  //const isLoggedIn = authContext.isLoggedIn;
//   useEffect(() => {
  
//     authContext.userIsLoggedIn
//      console.log(authContext.userId);
    
// }, [authContext?.connected]);
  async function getUser(data) {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_URL_BACK}/auth/${authContext.userId}`,
        {
          headers: {
            Authorization: `Bearer ${authContext.token}`
          }
        }
      );
      if (res.status === 200) {
        console.log(data);
        return {
          data
        };
      }
    } catch {
      console.log("problème");
    }
  }
  getUser();
  return (
    <main className={css.mainProfil}>
      <Header />
      <h2>Bonjour</h2>
      
    </main>
  );
}

export default Profil;
