import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profil from './pages/Profil';
import Users from './pages/Users';
import Newsfeed from './pages/Newsfeed';
import '../node_modules/normalize-scss';
import './assets/css/index.scss';




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/users" element={<Users />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
          <Route path="*" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
      
  </React.StrictMode>
);
