const multer = require("multer");
const limits = multer({
  fileSize: 10 * 1024 * 1024,
});
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(".")[0].split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, `${name}_${Date.now()}.${extension}`);
  },
});

//s'assurer que l'user envoi bien un fichier image autorisé
const fileFilter = (req, file, callback) => {
  const extension = MIME_TYPES[file.mimetype];
  if (
    extension === "jpg" ||
    extension === "png" ||
    extension === "webp" ||
    extension === "gif"
  ) {
    callback(null, true);
  } else {
    callback("Erreur : Mauvais type de fichier", false);
  }
  if (file < limits) {
    callback(null, true);
  } else {
    callback("Erreur : image trop grande", false);
  }
};

module.exports = multer({ storage: storage }).single("image");
