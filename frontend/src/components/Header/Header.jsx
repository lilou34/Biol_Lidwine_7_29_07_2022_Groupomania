import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserDetails } from "../../store/UserAction";
import { logout } from "../../store/UserSlice";
import Logo from "../Logo/Logo";
import css from "./Header.module.scss";

const Header = () => {
  const { userInfo, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // automatically authenticate user if token is found
  useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails());
    }
  }, [userToken, dispatch]);

  return (
    
    <header>
    <Logo/>
      <div className="header-status">
        <span>
          {userInfo ? `Logged in as ${userInfo.email}` : "You're not logged in"}
        </span>
        <div className="cta">
          {userInfo ? (
            <button className="button" onClick={() => dispatch(logout())}>
              Logout
            </button>
          ) : (
            <NavLink className="button" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
      <nav className="container navigation">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/login">Connexion</NavLink>
        <NavLink to="/register">Enregistrement</NavLink>
        <NavLink to="/profil">Mon Profil</NavLink>
        <NavLink to="/users">Utilisateurs</NavLink>
      </nav>
    </header>
  );
};

export default Header;
// import React from "react";
// import Navigation from "../Navigation/Navigation";
// import Logo from "../Logo/Logo";
// import css from "./Header.module.scss";
// const Header = () => {
//   return (
//     <header className={css.header}>
//       <Logo />
//       <Navigation />
//       <h1>TESTTEST</h1>
//     </header>
//   );
// };

// export default Header;
