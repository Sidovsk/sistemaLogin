const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = process.env;

//Define a schema
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
})

// hash user password before saving into database
UserSchema.pre('save', function(next){
    console.log(SALT_ROUNDS)
    this.password = bcrypt.hashSync(this.password, parseInt(SALT_ROUNDS))
    next()
})

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', UserSchema)