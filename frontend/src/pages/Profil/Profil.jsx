import axios from "axios";
import { useSelector } from "react-redux";
import { getUser } from "../../store/UserAction"
import css from "./Profil.module.scss";

const Profil = () => {
  const { userInfo } = useSelector((state) => state.user);
  const test= () =>{
    axios.get("http://127.0.0.1:3330/api/auth/82").then((response) => {
      console.log(response.data);
  })};
  return (
    <div>
      <figure className={css.figure}>{userInfo?.email}</figure>
      <span>
        Welcome <strong>{userInfo?.firstName}!</strong> You can view this page
        because you're logged in
      </span>
      <button onClick={test}>bouton</button>
    </div>
  );
};

export default Profil;
