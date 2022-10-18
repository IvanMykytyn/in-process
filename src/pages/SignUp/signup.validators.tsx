import Joi from 'joi';
import { validateEmail, validatePassword } from '../../utils';

const signupValidator = Joi.object({
  email: validateEmail
});

export { signupValidator };
