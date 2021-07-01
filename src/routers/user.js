const router = require('express').Router();
const userController = require('../controllers/user');
const authJWT = require('../authentication/auth-jwt');
const userValidation = require('../validations/user');

router.get('/', authJWT, userController.getAllUsers);
router.post('/', userValidation.createUserValidation, userController.createAccount);
router.get('/me', authJWT, userController.getMyUser);
router.put('/me', userValidation.updateUserValidation, authJWT, userController.updateMyUser);
router.delete('/me', authJWT, userController.deleteMyUser);
router.get('/:id', authJWT, userController.getUser);

module.exports = router;