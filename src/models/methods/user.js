const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../../utils/constants');

const userMethods = (UserSchema) => {
    // hash user password before saving into database
    UserSchema.pre('save', function(next){
        this.password = bcrypt.hashSync(this.password, parseInt(SALT_ROUNDS));
        next();
    })

    UserSchema.methods.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    }
}

module.exports = userMethods;