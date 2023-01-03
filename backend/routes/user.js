const express = require('express');
const router = express.Router();
const max = require("../middleware/limiter")
const multer = require('../middleware/multer-config')
const userCtrl = require('../controllers/user');
//const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
router.post('/signup',userCtrl.signup, userCtrl.login);// , userCtrl.login permet de se connecter directement sans devoir retaper
router.post('/login', max.limiter, userCtrl.login);
router.get('/users', auth, userCtrl.allUsers);
router.get('/:id', auth, userCtrl.user);

module.exports = router;