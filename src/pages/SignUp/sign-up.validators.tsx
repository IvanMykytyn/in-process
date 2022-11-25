import Joi from 'joi';
import {validateName, validatePassword } from 'utils';


const signUpValidator = Joi.object({
  firstName: validateName,
  lastName: validateName,
  password: validatePassword,
});

export { signUpValidator };
