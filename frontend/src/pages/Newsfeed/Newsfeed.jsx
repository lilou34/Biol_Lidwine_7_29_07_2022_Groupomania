import React from "react";
import Header from "../../components/Header/Header";
import css from "./Newsfeed.module.scss";

function Newsfeed(){
  return (
    <main className={css.mainNewsfeed}>
      <Header />
    </main>
  );
};

export default Newsfeed;
