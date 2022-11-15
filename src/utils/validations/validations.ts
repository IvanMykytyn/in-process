import Joi from 'joi';

const validateEmail = Joi.string()
    .required()
    .min(1)
    .max(320)
    .regex(/@incorainc.com\s*$/)
    .messages({
        'string.empty': 'The email cannot be empty.',
        'string.pattern.base': 'The email can only end with incorainc.com',
        'string.min': 'The email must contain at least 1 character.',
        'string.max': 'The email should not contain more than 320 characters.'
    });

const validatePassword = Joi.string()
    .required()
    .min(8)
    .max(255)
    .regex(/^(?=.*[A-Z])(?=.*[a-z]).{8,255}$/)
    .messages({
        'string.empty': 'The password cannot be empty.',
        'string.pattern.base': 'The password must be longer than 8 characters and contain at least one capital letter.',
        'srting.max': 'The should not contain more than 255 characters.'
    });

const validateConfirmPassword = Joi.any().valid(Joi.ref('newPassword')).messages({
    'any.required': 'The password must be the same.',
    'any.only': 'The password must be the same.',
});

const validateName = Joi.string().min(1).max(255).messages({
    'string.empty': 'The Name cannot be empty.',
});

const validateAddUserEmail = Joi.string()
    .regex(/@incorainc.com\s*$/)
    .messages({
        'string.empty': 'The email cannot be empty.',
        'string.pattern.base': 'The email can only end with incorainc.com',
    });

const validateArrayOfEmails = Joi.array()
    .min(1)
    .unique()
    .items(validateAddUserEmail)
    .messages({
        'array.min': `Field should have a minimum one email`,
    });

export {
    validateEmail,
    validatePassword,
    validateConfirmPassword,
    validateName,
    validateAddUserEmail,
    validateArrayOfEmails,
};
