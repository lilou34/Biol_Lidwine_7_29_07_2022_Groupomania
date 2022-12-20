import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/Error/Error";
import Profil from "./pages/Profil/Profil";
//import Users from "./pages/Users/Users";
import Newsfeed from "./pages/Newsfeed/Newsfeed";
import Auth from "./utils/context/Auth";
import { hasAuth } from "./utils/AuthApi";
import AuthRoute from "./utils/AuthRoute";

//import { ProtectedRoute } from "./utils/ProtectedRoute";

const App = () => {
  const [isAuth, setIsAuth] = useState(hasAuth());
  return (
    <Auth.Provider value={{ isAuth }}>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <AuthRoute>
              <Newsfeed />
            </AuthRoute>
          }
        />
        <Route
          path="/user"
          element={
            <AuthRoute>
              <Profil />
            </AuthRoute>
          }
        />
      </Routes>
    </Auth.Provider>
  );
};

export default App;
