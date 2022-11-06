const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { user: User, post: Post, comment: Comment, like: Like } = prisma;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const emailValidator = require("email-validator");
const passwordValidator = require("password-validator");
///////////chiffrage email////////////
//const cryptoJs = require("crypto-js");

///////////////// Creation schema passwordValidator////////////
var schemaMDP = new passwordValidator();
//////////////contrainte mot de passe/////////////////
schemaMDP
  .is()
  .min(8) // longueur mini 8
  .is()
  .max(20) // longueur max 20
  .has()
  .uppercase(1) // min majuscule 1
  .has()
  .lowercase(1) // min minuscule 1
  .has()
  .digits(1) // min nombre 1
  .has()
  .not()
  .spaces() // pas d'espaces
  .is()
  .not()
  .oneOf([
    "Passw0rd",
    "Password1",
    "Password2",
    "Password3",
    "Azerty1",
    "Azerty2",
  ]); // entrées interdites

/////////////////////////enregistrement nouvel user/////////////////////
exports.signup = async (req, res, next) => {
 // const emailCrypt = cryptoJs
    //.HmacSHA256(req.body.email, `${process.env.CLE_EMAIL}`)
    //.toString(); //crypt email

  if (!emailValidator.validate(req.body.email)) {
    return res.status(400).json({ message: "Adresse email invalide !" });
  } else if (!schemaMDP.validate(req.body.password)) {
    return res.status(400).json({ message: "Mot de passe invalide !" });
  } else {
    //////////// Crypter le mot de passe////////////
    bcrypt
      .hash(req.body.password, 10) //bcrypt hash le mdp saler 10 fois
      .then((hash) => {
        console.log("creation user");
        prisma.user
          .create({
            data: {
              email: req.body.email,//emailCrypt,
              password: hash,
            },
          })
          next();
      })
      .catch((error) => res.status(500).json({ error }));
  }
};

///////////////////////////conexion user avec compte//////////////////////////
exports.login = async (req, res, next) => {
  //const emailCrypt = cryptoJs
    //.HmacSHA256(req.body.email, `${process.env.CLE_EMAIL}`)
    //.toString(); //crypt email
  prisma.user
    .findUnique({ where: { email: req.body.email, } })
    .then((user) => {
      console.log(user);
      if (!user) {
        return res
          .status(401)
          .json({ message: "Paire login/mot de passe incorrecte" });
      }
      //Si l'e-mail correspond à un utilisateur existant, nous continuons.
      bcrypt
        .compare(req.body.password, user.password) //fonction compare de bcrypt pour comparer le mot de passe entré par l'user avec le hash enregistré dans la base de données
        .then((valid) => {
          if (!valid) {
            return res
              .status(402)
              .json({ message: "Paire login/mot de passe incorrecte" });
          }
          //Nous renvoyons le token au front-end avec notre réponse.
          res.status(200).json({
            //userId: user.id,
            token: jwt.sign(
              //fonction sign de jsonwebtoken pour chiffrer un nouveau token
              { userId: user.id },
              process.env.TOKEN_SECRET, // chiffrage secret
              { expiresIn: "24h" } //durée de validité du token à 24 heures
            ),
          });
        })
        .catch((error) => res.status(501).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
