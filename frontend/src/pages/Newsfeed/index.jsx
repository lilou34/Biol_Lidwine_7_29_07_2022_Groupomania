import React from "react";
import Header from "../../components/header";
import css from "./Newsfeed.module.scss";

const Newsfeed = () => {
  return (
    <main className={css.mainNewsfeed}>
      <Header />
    </main>
  );
};

export default Newsfeed;
