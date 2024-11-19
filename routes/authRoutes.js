const router = require('express').Router();

const AuthController = require('../controllers/authController');

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

router.get('/sign-in', AuthController.signIn);
router.get('/sign-up', AuthController.signUp);

router.get('/confirm-email', AuthController.confirmEmail);
router.post('/verify-email', AuthController.verifyEmail);

router.get('/forgot-password/:token', AuthController.forgotPassword);
router.post('/reset-password', AuthController.resetPassword);

module.exports = router;
