const mongoose = require('mongoose');
const userMethods = require('./methods/user');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "Olá, eu sou um usuário do sistema!"
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userMethods(UserSchema);

module.exports = mongoose.model('User', UserSchema);