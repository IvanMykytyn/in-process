interface User {
  firstName: string
  lastName: string
  email: string
  password: string
}

type UserLoginProps = Pick<User, 'email' | 'password'>
type UserSignUpProps = User

export type { User, UserLoginProps, UserSignUpProps }
