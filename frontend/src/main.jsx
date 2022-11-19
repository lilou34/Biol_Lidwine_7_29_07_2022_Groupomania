import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Index";
import Login from "./pages/login";

import Profil from "./pages/profil";
import Users from "./pages/users";
import Newsfeed from "./pages/newsfeed";
import css from "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Newsfeed />} />
        
        <Route path="/profil" element={<Profil />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Newsfeed />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
