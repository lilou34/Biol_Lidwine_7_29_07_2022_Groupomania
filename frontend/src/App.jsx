import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/Error/Error";
import Profil from "./pages/Profil/Profil";
//import Users from "./pages/Users/Users";
import Newsfeed from "./pages/Newsfeed/Newsfeed";
import AuthContext from "./utils/context/Auth";


//import { ProtectedRoute } from "./utils/ProtectedRoute";

function App() {

  const context = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <AuthContext.Provider value={context}>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Newsfeed"
          element={
            isLoggedIn?
              ('Newsfeed /'):('Login /')
            
          }
        />
        <Route
          path="/user"
          element={
            isLoggedIn?
              ('Profil /'):('Login /')
          }
        />
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
