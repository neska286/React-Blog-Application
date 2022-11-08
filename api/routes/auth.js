const router = require('express').Router();
const User = require('../model/User');
const { signup, signin } = require('../controller/auth.controller');
const { validation } = require('../middleware/validation');
const { signUpValidator } = require('../auth/auth.validation');



//Register

router.post('/register',signup)
router.post('/login',signin)


module.exports = router