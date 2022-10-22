import Joi from 'joi';
import {validateName, validatePassword } from 'utils';

// TODO : add validation
const signUpValidator = Joi.object({
  firstName: validateName,
  lastName: validateName,
  password: validatePassword,
});

export { signUpValidator };
