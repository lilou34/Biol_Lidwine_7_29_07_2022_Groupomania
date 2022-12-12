import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
//import ErrorPage from "./pages/Error/Error";
import Profil from "./pages/Profil/Profil";
import Users from "./pages/Users/Users";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./routing/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Utilisateurs" element={<Users />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
//<Route path="*" element={<ErrorPage />} />
