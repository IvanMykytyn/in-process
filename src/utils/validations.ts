import Joi from 'joi';


const validateEmail = Joi.string()
  .required()
  .regex(/@incorainc.com\s*$/)
  .messages({
    'string.empty': 'The email cannot be empty.',
    'string.pattern.base': 'The email can only end with incorainc.com',
  });

// TODO change rules for password validation
const validatePassword = Joi.string().required().messages({
  'string.empty': 'The password cannot be empty.',
});

const validateConfirmPassword = Joi.any().valid(Joi.ref('password')).messages({
  'any.required': 'The Confirm password cannot be empty.',
  'any.only': 'Password must match',
});

export { validateEmail, validatePassword, validateConfirmPassword };
