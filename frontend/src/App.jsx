import React, { useState, useContext } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/Error/Error";
import Profil from "./pages/Profil/Profil";
import Users from "./pages/Users/Users";
import Newsfeed from "./pages/Newsfeed/Newsfeed";
import {AuthContext} from "./utils/context/Auth";

function App() {
  const authContext = useContext(AuthContext);
  const ProtectedRoute = ({connected}) => {
    if(!connected) {
        return <Navigate to='/' replace />;
    }
    return <Outlet />;
};
  return (
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute connected={authContext.userIsLoggedIn} />}>
        <Route
          path="/Newsfeed"
          element={<Newsfeed />}
        />
        <Route
          path="/Profil"
          element={<Profil />}
        />
        <Route
          path="/Users"
          element={<Users />}
        />
        </Route>
      </Routes>
    
  );
};

export default App;
