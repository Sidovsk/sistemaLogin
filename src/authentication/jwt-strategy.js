const passportJWT = require('passport-jwt');
const {JWT_SECRET} = require('../utils/constants');
const User = require('../models/user');
const jwtOptions = {};
jwtOptions.jwtFromRequest = passportJWT.ExtractJwt.fromAuthHeaderWithScheme('JWT');
jwtOptions.secretOrKey = JWT_SECRET;

module.exports = new passportJWT.Strategy(
    jwtOptions,
    async (jwtPayload, done) => {
        try {
            const user = await User.findById(jwtPayload.id).select({_id: 1});
            user ?
                done(null, user) : 
                done(null, false);
        } catch(err){
            done(err, false);
        }
    }
);