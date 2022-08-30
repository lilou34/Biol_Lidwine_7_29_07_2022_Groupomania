import React from 'react';

import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Index';
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
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/users" element={<Users />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
          <Route path="*" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
