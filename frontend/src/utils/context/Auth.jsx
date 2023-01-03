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

// import React,{ createContext, PropsWithChildren, useEffect, useMemo, useState } from "react";

// export const AuthContext= createContext(false);
// const AuthContextProvider = ({children}) => {

//     const {res, error, axiosFunction} = useAxios<{token: string, user: UserProfil}>({
//         url: "/auth/connect",

//     });
//     const [userId, setUserId] = useState(-1);
//     const [role, setRole] = useState("");
//     const [pseudo, setPseudo] = useState("");
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [grade, setGrade] = useState("");
//     const [avatar, setAvatar] = useState("");
//     const [connected, setConnected] = useState(false);
//     const [modifyProfile, setModifyProfile] = useState(false);

//     const setConnectHandle = (isConnected) => {
//         setConnected(isConnected);
//     };

//     const setModifyProfileHandle = (isModify) => {
//         setModifyProfile(isModify);
//     };

//     const getUserData = async () => {
//         axios
//           .post(`${import.meta.env.VITE_URL_BACK}/auth/user`, data)
//           .then(function (res) {
//             if (res.status === 200 || res.status === 201) {
//               console.log(res.data);
              
//             }
            
//             return res;
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//     };

//     const contextValues = useMemo(() => {
//         return {
//             userId,
//             pseudo,
//             firstName,
//             lastName,
//             grade,
//             avatar,
//             role,
//             connected, setConnectHandle,
//             setModifyProfileHandle
//         };
//     }, [ userId, pseudo,firstName, lastName, grade, avatar, role, connected ]);

//     useEffect(() => {
//         if(localStorage.getItem("token")) {
//             getUserData();
//             setConnected(true);
//         } else {
//             setUserId(-1);
//             setPseudo("");
//             setFirstName("");
//             setLastName("");
//             setGrade("");
//             setAvatar("");
//             setRole("");
//         }
//         setModifyProfile(false);
//     }, [connected, modifyProfile]);

//     useEffect(() => {
//         if (res) {
//             localStorage.setItem("token", JSON.stringify(res.token));
//             setUserId(res.user.id);
//             setPseudo(res.user.pseudo);
//             setFirstName(res.user.firstName);
//             setLastName(res.user.lastName);
//             setAvatar(res.user.avatar);
//             setRole(res.user.role);
//         }
//     }, [res]);

//     useEffect(() => {
//         if (error) {
//             localStorage.removeItem("token");
//             setConnected(false);
//         }
//     }, [error]);

//     return (
//         <AuthContext.Provider value={contextValues}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthContextProvider;