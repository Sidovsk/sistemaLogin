const { validate, ValidationError, Joi } = require('express-validation')


const loginValidation = validate({
    body: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
    })
});

module.exports = {loginValidation};