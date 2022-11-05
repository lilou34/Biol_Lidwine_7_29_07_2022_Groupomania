const express = require('express');
const router = express.Router();
const max = require("../middleware/limiter")
const multer = require('../middleware/multer-config')
const userCtrl = require('../controllers/user');
//const postCtrl = require('../controllers/post');

router.post('/signup',userCtrl.signup);
router.post('/login', max.limiter, userCtrl.login);

module.exports = router;