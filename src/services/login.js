const User = require('../models/user');
const genToken = require('../authentication/gen-token');

const login = async (email, password) => {
    try {
        const user = await User.findOne({email});
        const token = (user && user.validPassword(password)) ? genToken(user._id) : undefined; 
        return { user, token }     
    } catch(err){
        throw err;
    }
}

module.exports = { 
    login
};