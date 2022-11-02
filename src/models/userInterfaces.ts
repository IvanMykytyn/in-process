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

interface changePasswordProps {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
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
  UserFields,
  UserLoginProps,
  UserSignUpProps,
  UserEmailField,
  ResetPasswordProps,
  UserWithToken,
  changePasswordProps,
  // UserUpdateProps,
};
