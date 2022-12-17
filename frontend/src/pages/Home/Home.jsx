import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserDetails } from "../../store/UserAction";
import { logout } from "../../store/UserSlice";
import Header from "../../components/Header/Header";
import css from "./Home.module.scss";

const Home = () => {


  return (
    <main className={css.mainNewsfeed}>
      <Header />
    </main>
  );
};

export default Home;
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
