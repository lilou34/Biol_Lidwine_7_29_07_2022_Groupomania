import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/Error/Error";
//import Profil from "./pages/Profil/Profil";
//import Users from "./pages/Users/Users";
import Newsfeed from "./pages/Newsfeed/Newsfeed";
import css from "./main.scss";
import LoginContext from "./utils/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginContext.Provider value={false}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Newsfeed />} />
      </Routes>
    </BrowserRouter>
  </LoginContext.Provider>
);
/*<Route path="/login" element={<Login />} />
        <Route path="/" element={<Newsfeed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Newsfeed />} />*/
