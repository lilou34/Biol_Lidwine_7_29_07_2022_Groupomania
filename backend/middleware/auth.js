const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async (req, res, next) => {
  try {
    const header = req.header("Authorization");
    if (header == null) return res.status(403).send({ message: "Invalid" });
    const token = header.split(" ")[1];

    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = decodedToken.userId;
    const user = await prisma.user.findUnique({
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
      imageProfile: user.imageProfile,
    };
    return next();
  } catch (error) {
    return res.status(401).json(error);
  }
};

// 