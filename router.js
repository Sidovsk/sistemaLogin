const router = require('express').Router()
const userController = require('./userController')
const authJWT = require('./authenticate-jwt')

router.get('/users', authJWT, userController.getAllUsers)
router.get('/users/me', authJWT, userController.getMyUser)
router.get('/users/:id', authJWT, userController.getUser)
router.post('/users', userController.createAccount)
router.post('/login', userController.login)
router.put('/users/me', authJWT, userController.updateMyUser)
router.delete('/users/me', authJWT, userController.deleteMyUser)

module.exports = router