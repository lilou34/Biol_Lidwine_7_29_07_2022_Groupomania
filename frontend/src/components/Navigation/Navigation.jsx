import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../store/UserAction";
import { logout } from "../../store/UserSlice";
import css from "./Navigation.module.scss";

const Navigation = () => {
  const { userInfo, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // automatically authenticate user if token is found
  useEffect(() => {
    if (userToken) {
      dispatch(getUser());
    }
  }, [userToken, dispatch]);

  return (
    <nav className={css.nav_container}>
      <ul className={css.ul}>
        <li className={css.li}>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#4e5166",
                    background: "#ffd7d7",
                  }
                : { color: "#ffd7d7", background: "#4e5166" }
            }
          >
            Fil d'actualité
          </NavLink>
        </li>
        <li className={css.li}>
          <NavLink
            to="/Profil"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#4e5166",
                    background: "#ffd7d7",
                  }
                : { color: "#ffd7d7", background: "#4e5166" }
            }
          >
            Mon Profil
          </NavLink>
        </li>
        <li className={css.li}>
          <NavLink
            to="/Users"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#4e5166",
                    background: "#ffd7d7",
                  }
                : { color: "#ffd7d7", background: "#4e5166" }
            }
          >
            Utilisateurs
          </NavLink>
        </li>
        
        <li className={css.li}>{userInfo ? (
          <NavLink
            to="/login"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#4e5166",
                    background: "#ffd7d7",
                  }
                : { color: "#ffd7d7", background: "#4e5166" }
            } onClick={() => dispatch(logout())}>
          
            Déconnexion
          </NavLink>) : (
            <NavLink className={css.button} to="/login">
              Login
            </NavLink>)}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
/*
<NavLink to='/Login'>
    <li>Connexion</li>
</NavLink>
<NavLink to='/Signup'>
    <li>Créer Compte</li>
</NavLink>
*/
/*<NavLink to='/' className={(nav) => (nav.isActive ? "css.nav-active" : "")}>
                    <li className={css.li}>Fil d'actualité</li>
                </NavLink>
                
                <NavLink to='/Profil' className={(nav) => (nav.isActive ? "css.nav-active" : "")}>
                    <li className={css.li}>Mon Profil</li>
                </NavLink>
                <NavLink to='/Users' className={(nav) => (nav.isActive ? "css.nav-active" : "")}>
                    <li className={css.li}>Utilisateurs</li>
                </NavLink>
                <NavLink to='/login' className={(nav) => (nav.isActive ? "css.nav-active" : "")}>
                    <li className={css.li}>Déconnexion</li>
                </NavLink>*/
