const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/constants');

const genToken = (userId) => {
    return jwt.sign({id: userId}, JWT_SECRET);
}

module.exports = genToken;