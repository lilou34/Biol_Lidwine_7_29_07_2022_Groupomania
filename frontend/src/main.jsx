import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
//import Login from "./pages/Login";

//import Profil from "./pages/Profil";
//import Users from "./pages/Users";
//import Newsfeed from "./pages/Newsfeed";
import css from "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);
/*<Route path="/login" element={<Login />} />
        <Route path="/" element={<Newsfeed />} />
        
        <Route path="/profil" element={<Profil />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Newsfeed />} />*/
