import Joi from 'joi';

const validateEmail = Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .min(1)
    .max(320)
    .messages({
        'string.empty': 'The email cannot be empty.',
        'string.min': 'The email must contain at least 1 character.',
        'string.max': 'The email should not contain more than 320 characters.',
        'string.email': 'Invalid email.'
    });

const validatePassword = Joi.string()
    .required()
    .min(8)
    .max(255)
    .regex(/^(?=.*[A-Z])(?=.*[a-z]).{8,255}$/)
    .messages({
        'string.empty': 'The password cannot be empty.',
        'string.min': 'The password must be longer than 8 characters.',
        'string.max': 'The should not contain more than 255 characters.',
        'string.pattern.base': 'The password must be contain at least one upper and one lower case letter.'
    });

const validateConfirmPassword = Joi.any().valid(Joi.ref('newPassword')).messages({
    'any.required': 'The password must be the same.',
    'any.only': 'The password must be the same.',
});

const validateName = Joi.string()
    .min(1)
    .max(255)
    .regex(/^[A-Za-z]+$/)
    .messages({
        'string.empty': 'The Name cannot be empty.',
        'string.pattern.base': 'The name must consist of only letters.'
    });

const validateAddUserEmail = Joi.string()
.email({ tlds: { allow: false } })
.min(1)
.max(320)
.messages({
    'string.empty': 'The email cannot be empty.',
    'string.min': 'The email must contain at least 1 character.',
    'string.max': 'The email should not contain more than 320 characters.',
    'string.email': 'Invalid email.'
});

const validateArrayOfEmails = Joi.array()
    .min(1)
    .unique()
    .items(validateAddUserEmail)
    .messages({
        'array.required': `Field should have a minimum one email`,
        'array.empty': `Field should have a minimum one email`,
        'array.min': `Field should have a minimum one email`,
    });

export {
    validateEmail,
    validatePassword,
    validateConfirmPassword,
    validateName,
    validateArrayOfEmails,
};
