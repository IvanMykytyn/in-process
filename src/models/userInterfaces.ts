interface UserFields {
  firstName: string;
  lastName: string;
}
interface UserPasswordField {
  password: string;
}
interface UserEmailField {
  email: string;
}
interface UserIdField {
  id: number;
}

type UserLoginProps = UserEmailField & UserPasswordField;
type UserSignUpProps = UserFields & UserPasswordField & UserIdField;
// type UserUpdateProps = UserFields;

interface ResetPasswordProps {
  id: string;
  token: string;
  password: string;
}

interface User extends UserFields, UserEmailField {
  role: 'user' | 'admin';
}

type UserWithToken = User & { access_token: string };

export type {
  User,
  UserLoginProps,
  UserSignUpProps,
  UserEmailField,
  ResetPasswordProps,
  UserWithToken
  // UserUpdateProps,
};
