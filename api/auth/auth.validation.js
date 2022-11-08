const Joi= require('Joi');


const signUpValidator = {
    body: Joi.object().required().keys({
        username: Joi.string().required().pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/)).message({
            'string.empty': 'plz fill in u name',
            'any.required': 'plz send  u name',
            'string.pattern.base': 'plz enter valid name char',
        }),
        email: Joi.string().email().required(),
        password: Joi.string().required().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)),
        cPassword: Joi.valid(Joi.ref('password')).required(),
    })
}

module.exports = {
    signUpValidator
}