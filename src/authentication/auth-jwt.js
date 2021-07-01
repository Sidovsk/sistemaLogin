const passport = require('passport');
const JWTStrategy = require('./jwt-strategy');

passport.use('jwt', JWTStrategy);

module.exports = (req, res, next) => {
  passport.authenticate('jwt', { session: false })(req, res, next);
};