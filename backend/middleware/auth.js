const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = (req, res, next) => {
  try {
    const header = req.header("Authorization");
    if (header == null) return res.status(403).send({ message: "Invalid" });
    const token = header.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    if (err) return res.status(403).send({ message: "Token invalid" + err });
    const userId = decodedToken.userId;
    const user =  prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw "Requête non authentifiée";
    }
    req.auth = {
      userId: user.id,
      email: user.email,
      pseudo: user.pseudo,
      firstName: user.firstName,
      lastName: user.lastName,
      grade: user.grade,
      role: user.role,
      avatar: user.avatar,
    };
    return next();
  } catch (error) {
    return res.status(401).json(error);
  }
};

// module.exports = (req, res, next) => {
//   const header = req.header("Authorization");
//   if (header == null) return res.status(403).send({ message: "Invalid" });
//   const token = header.split(" ")[1];

//   jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
//     if (err) return res.status(403).send({ message: "Token invalid" + err });
//     next();
//   });
// };
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");

// //exportation de la fonction du middleware
// module.exports = (req, res, next) => {
//   try {
//     //récupérer le token dans le headers authorization : bearer token
//     // console.log("---->middleware authentification");
//     // console.log(req.headers.authorization);

//     const token = req.headers.authorization.split(" ")[1];

//     //décoder le token
//     const decodedToken = jwt.verify(token, `${process.env.TOKEN_SECRET}`);

//     //récupérer le userId qu'il y a à l'intérieur du token déchiffré et le comparé avec l'user id en clair
//     const userIdDecodedToken = decodedToken.userId;

//     userIdParamsUrl = req.originalUrl.split("=")[1];

//     //comparaison du userId qu'il y a en clair dans le req avec le userId qu'il y a dans le token
//     if (userIdParamsUrl == userIdDecodedToken) {
//       next();
//     } else {
//       throw "Erreur identification userId incorrect";
//     }

//     //s'il y a des erreurs dans le try on les récupéres ici
//   } catch (error) {
//     res.status(401).json({
//       message: "Echec Authentification",
//       error: error,
//     });
//   }
// };
