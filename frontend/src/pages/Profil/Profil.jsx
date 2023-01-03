import axios from "axios";
import React, {useContext} from "react";
import Header from "../../components/Header/Header";
import css from "./Profil.module.scss";
import { AuthContext } from "../../utils/context/Auth";

function Profil(){
const authContext = useContext(AuthContext);
const userId = localStorage.getItem("userId");
const token = localStorage.getItem("token");
const role = localStorage.getItem("admin");
console.log(userId, token, role);
const config = {
  headers: { Authorization: `Bearer ${token}` }
};
async function getUser(data){
  try{
    
    const res = await axios.get(`${import.meta.env.VITE_URL_BACK}/auth/${userId}`, config)
    if (res.status === 200 || res.status === 201) {console.log(data);
    }
  }catch{
    console.log("problème");
    
  }
}
getUser();
  return (
    <main className={css.mainProfil}>
      <Header />
    </main>
  );
};

export default Profil;
