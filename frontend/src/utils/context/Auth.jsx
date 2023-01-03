import React, {createContext, useState}from "react";
import { useEffect, useMemo } from "react";

// const defaultValue = {
//     token: "",
//     userId: null,
//     admin: null,
//     isLoggedIn: false,
//     login: () => {},
//     logout: () => {},
//   };
  export const AuthContext = createContext();
  //Contrôle de la présence du token, de m'userId et de l'admin état dans le local storage
// const tokenLs = localStorage.getItem("token");
// const userIdLs = localStorage.getItem("userId");
// const adminLs = Number(localStorage.getItem("admin"));
//le context provider pour wrapper app.js
function AuthContextProvider(props){
 //stockage du token d'authentification, de l'userId et de l'état admin
 const [token, setToken] = useState(null);
 const [userId, setUserId] = useState(null);
 const [admin, setAdmin] = useState(null);
 const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  //une fonction pour mettre à jour le token, l'userId et admin état dans le state
  const loginHandler = () => {
    setUserIsLoggedIn(true);
  };

  //pour se déconnecter (faire passer le token à null)
  const logoutHandler = () => {
    setToken(null);
    setUserId(null);
    setAdmin(null);
    setUserIsLoggedIn(false);
    //supprimer la donnée dans le local storage
    localStorage.clear();
  };
  //s'il y présence du token ça veut dire que je suis loggé
  //convertir le token en valeur booléenne
  //const userIsLoggedIn = !!token;
  //le context value
  const contextValue = useMemo(() => {
    return {
      token,
      userId,
      userIsLoggedIn,
      admin,
      loginHandler,
      logoutHandler,
    };
  }, [token, userId, userIsLoggedIn, admin]);

useEffect(() => {
    if(localStorage.getItem("token")){
        setToken(JSON.parse(localStorage.getItem("token")));
        setUserId(JSON.parse(localStorage.getItem("userId")));
        setAdmin(JSON.parse(localStorage.getItem("admin")));
        setUserIsLoggedIn(true)
    }}, [userIsLoggedIn]
)
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
