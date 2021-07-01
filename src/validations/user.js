const { validate, ValidationError, Joi } = require('express-validation')

const createUserValidation = validate({
    body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().min(10).required(),
        status: Joi.string().required(),
        password: Joi.string().required(),
    })
});

const updateUserValidation = validate({
    body: Joi.object({
        name: Joi.string(),
        email: Joi.string().email().min(10),
        status: Joi.string(),
        password: Joi.string(),
    })
});

module.exports = {
    createUserValidation,
    updateUserValidation
};
