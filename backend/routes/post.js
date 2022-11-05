const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')
const post = require('../controllers/post')
const comment = require('../controllers/comment')
const like = require('../controllers/like')


//router.get("/", auth, post.allPost);
//router.post("/", auth, multer, post.createPost);
//router.delete("/:id", auth, post.deletePost);
module.exports = router;