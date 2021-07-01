const { pick } = require('lodash');
const factories = require('./factories/user');
const userService = require('../services/user');

const createAccount = async (req, res, next) => {
    try {
        const { name, status, email, password } = req.body;
        await userService.createAccount(name, status, email, password);
        res.status(201).json({message: "Usuário cadastrado com sucesso!"});
    } catch(err){
        next(err);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch(err){
        next(err);
    }
};

const getUser = factories.getUser(false);

const getMyUser = factories.getUser(true);

const updateMyUser = async (req, res, next) => {
    const userId = req.user._id;
    try {
        const updateData = pick(req.body, [
            'name',
            'email',
            'status'
        ]);
        const user = await userService.updateUser(userId, updateData);
        user ?
            res.json({ message: "Usuário alterado com sucesso!"}) :
            res.status(404).json({ message: "Usuário não encontrado"});
    } catch(err){
        next(err);
    }
};

const deleteMyUser = async (req, res, next) => {
    const userId = req.user._id;
    try {
        const user = await userService.deleteUser(userId);
        user ?
            res.json({ message: "Usuário alterado com sucesso!"}) :
            res.status(404).json({ message: "Usuário deletado"});
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createAccount,
    getAllUsers,
    getMyUser,
    getUser,
    updateMyUser,
    deleteMyUser
};