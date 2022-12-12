import { useSelector } from "react-redux";
import css from "./Profil.module.scss";

const Profil = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div>
      <figure className="figure">{userInfo?.firstName.charAt(0).toUpperCase()}</figure>
      <span>
        Welcome <strong>{userInfo?.firstName}!</strong> You can view this page
        because you're logged in
      </span>
    </div>
  );
};

export default Profil;
