import React from 'react';

import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index/Index';
import Login from './pages/Login/Index';
import Signup from './pages/Signup/Index';
import Profil from './pages/Profil/Index';
import Users from './pages/Users/Index';
import Newsfeed from './pages/Newsfeed/Index';
import '../node_modules/normalize-scss';
import './assets/css/index.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/users" element={<Users />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
          <Route path="*" element={<Index />} />
          
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
