import Joi from 'joi';

const joi = require('joi');
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = joi.extend(joiPasswordExtendCore);

const validateEmail = Joi.string()
    .required()
    .regex(/@incorainc.com\s*$/)
    .messages({
        'string.empty': 'The email cannot be empty.',
        'string.pattern.base': 'The email can only end with incorainc.com',
    });

const validatePassword = joiPassword
        .string()
        .minOfLowercase(2)
        .minOfUppercase(2)
        .noWhiteSpaces()
        .required()
        .messages({
            'password.minOfUppercase': 'Password should contain at least {#min} uppercase character',
            'password.minOfLowercase': 'Password should contain at least {#min} lowercase character',
            'password.noWhiteSpaces': 'Password should not contain white spaces',
        })

const validateConfirmPassword = Joi.any().valid(Joi.ref('password')).messages({
    'any.required': 'The password must be the same.',
    'any.only': 'The password must be the same.',
});

const validateName = Joi.string().min(1).max(255).messages({
    'string.empty': 'The Name cannot be empty.',
});

export {validateEmail, validatePassword, validateConfirmPassword, validateName};