import React from "react";

export default React.createContext({
    isAuth: false,
    setIsAuth: value => {}
});

// import { createContext, useContext, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLocalStorage } from "./useLocalStorage";
// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useLocalStorage("user", null);
//   const navigate = useNavigate();

//   // call this function when you want to authenticate the user
//   const login = async (data) => {
//     setUser(data);
//     navigate("/profil");
//   };

//   // call this function to sign out logged in user
//   const logout = () => {
//     setUser(null);
//     navigate("/", { replace: true });
//   };

//   const value = useMemo(
//     () => ({
//       user,
//       login,
//       logout
//     }),
//     [user]
//   );
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

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