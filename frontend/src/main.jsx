import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import css from "./main.scss";
import { Provider } from "react-redux";
import store from "./Store";
////création de mon app et application du fournisseur de store///////
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
/*<LoginContext.Provider value={false}>
</LoginContext.Provider>
<Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil/:id" element={<Profil />} />
        
        <Route path="*" element={<Home />} />*/
