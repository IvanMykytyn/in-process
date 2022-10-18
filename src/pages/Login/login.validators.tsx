import Joi from 'joi';

const loginValodator = Joi.object({
    email: Joi.string().regex(/@incorainc.com\s*$/).required().messages({
        'string.empty':'The email cannot be empty.',
        'string.pattern.base':'The email can only end whith incorainc.com'
    }),
    password: Joi.string().required().messages({
        'string.empty':'The password cannot be empty.'
    })
})

export {loginValodator}