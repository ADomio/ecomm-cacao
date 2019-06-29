const router = require('express').Router();

const {
    test,
    registUser,
    loginUser,
} = require('../../controller/auth.controller');

// @route   GET /auth/test
// @desc    Test route
// @access  Public
router.get('/test', test);

// @route   POST /auth/register
// @desc    Regist new user
// @access  Public
router.post('/register', registUser);

// @route   POST /auth/login
// @desc    Login with the given user's account information / Sign a JWT token and send it to FE
// @access  Public
router.post('/login', loginUser);

module.exports = router;