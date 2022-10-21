import Joi from 'joi';
import { validateEmail} from 'utils';

const getAccessValidator = Joi.object({
  email: validateEmail
});

export { getAccessValidator };
