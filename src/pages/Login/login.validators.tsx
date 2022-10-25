import Joi from 'joi'
import { validateEmail, validatePassword } from '../../utils'

const loginValidator = Joi.object({
  email: validateEmail,
  password: validatePassword,
})

export { loginValidator }
