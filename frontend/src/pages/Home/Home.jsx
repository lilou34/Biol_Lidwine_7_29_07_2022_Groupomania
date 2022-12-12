import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserDetails } from "../../store/UserAction";
import { logout } from "../../store/UserSlice";
import css from "./Home.module.scss";

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
    <header className="headerHome">
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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/user-profile">Profile</NavLink>
      </nav>
    </header>
  );
};

export default Header;
// import React from "react";
// import Header from "../../components/Header/Header";
// import css from "./Home.module.scss";

// const Home = () => {
//   return (
//     <main className={css.mainHome}>
//       <Header />
//     </main>
//   );
// };

// export default Home;
