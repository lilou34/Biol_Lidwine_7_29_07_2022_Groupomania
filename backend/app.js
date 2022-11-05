const express = require("express");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const path = require("path");

const app = express();
app.use(express.urlencoded({extended:true}));
//////////////sécutité/////////////////////////////////////
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv").config();
//const helmet = require("helmet"); // helmet sécurise les headers
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Resource-Policy", "same-site");
  next();
});
app.use(helmet());

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoutes);
app.use("/api/post", postRoutes);
//app.use("/api/comment", commentRoutes);
module.exports = app;
