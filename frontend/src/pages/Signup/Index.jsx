import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import image from "./perif_paris.jpg";
import Logo from "../../components/Logo";

const Signup = () => {
const instance = axios.create({
  
});

  return (
    <main className="container-signup">
      <img
        src={image}
        alt="Périphérique Parisien tombé du jour"
        className="img-signup"
      />
      <section className="box-signup">
        <Logo className="logo" />
        
        <form id="form-signup" method="post" action="#">
          <h1>Création de Compte</h1>
          <p>Attention un seul compte par adresse email !!!</p>

          <div className="form-group">
            <label htmlFor="email">Adresse email *</label>
            <input
              className="name form-control"
              type="email"
              placeholder="exemple: dupont@gmail.com"
              required
            />
            <span className="infos">Doit comporter @ et . (.com ou .fr ....)</span>
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe *</label>
            <input
              className="password form-control"
              type="text"
              placeholder="exemple: Motdepasse01"
              required
            />
            <span className="infos">Minimum : 1 majuscule, 1 minuscule, 1 chiffre, 8 caractères</span>
          </div>

          <div className="form-group">
            <label htmlFor="pseudo">Pseudo *</label>
            <input
              className="pseudo form-control"
              type="text"
              placeholder="exemple: Pierrot34"
              required
              autoFocus/>
          </div>

          <div className="form-group">
            <label htmlFor="firstName">Prénom</label>
            <input
              className="firstName form-control"
              type="text"
              placeholder="exemple: Pierre"
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              className="name form-control"
              type="text"
              placeholder="exemple: Dupont"
            />
          </div>

          <div className="form-group">
            <label htmlFor="poste">Poste dans l'entreprise</label>
            <input
              className="poste form-control"
              type="text"
              placeholder="exemple: Secrétaire"
            />
          </div>

          <p>* Champs obligatoires</p>
          <button className="btn" type="submit">
            <NavLink to="/Newsfeed" className="texte">
              Créer un compte
            </NavLink>
          </button>
        </form>
      </section>
    </main>
  );
};
const emailReg =
/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+[a-zA-Z0-9-]+)/;
const passwordReg = /^[A-Za-z0-9]\w{8,}$/;
function emailValidation(email, password) {
if (!email.match(emailReg)) {
  alert("error : votre adresse email doit être valide !");
  return;
} else if (!password.match(passwordReg)) {
  alert("error: le mot de passe doit contenir minimum : 1 majuscule, 1 minuscule, 1 chiffre, 8 caractères ! ");
  return;
}
signup();
}

const EmailErr = () => (
<div className="error-password-div">
  votre adresse email n'est pas valide
</div>
);
export default Signup;
