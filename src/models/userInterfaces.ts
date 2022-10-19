interface UserFields {
  firstName: string;
  lastName: string;
  email: string;
}
interface UserPasswordField {
  password: string;
}

type UserLoginProps = Pick<UserFields, 'email'> & UserPasswordField;
type UserSignUpProps = UserFields & UserPasswordField;
type UserUpdateProps = UserFields;
type ForgotPasswordProps = Pick<UserFields, 'email'>;
interface ResetPasswordProps {
  id: string;
  token: string;
  password: string;
}

interface User extends UserSignUpProps {
  role: 'user' | 'admin';
  access_token: string;
}

export type {
  User,
  UserLoginProps,
  UserSignUpProps,
  ForgotPasswordProps,
  ResetPasswordProps,
  UserUpdateProps,
};
