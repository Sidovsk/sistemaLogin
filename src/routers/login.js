const router = require('express').Router();
const loginValidation = require('../validations/login');
const loginController = require('../controllers/login');

router.post('/', loginValidation.loginValidation, loginController.login);

module.exports = router;