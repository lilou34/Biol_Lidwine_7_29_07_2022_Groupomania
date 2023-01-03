import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.scss";
import { AuthContext } from "../../utils/context/Auth";
function Navigation() {
  const authContext = useContext(AuthContext);
  const deconnexion = () => {
    authContext.logoutHandler();
  };
  return (
    <nav className={css.nav_container}>
      <ul className={css.ul}>
        <li className={css.li}>
          <NavLink
            to="/Newsfeed"
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
            onClick={deconnexion}
          >
            Déconnexion
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

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
