import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import App from "./App";
import css from "./main.scss";
import AuthContextProvider from "./utils/context/Auth";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthContextProvider>
);
