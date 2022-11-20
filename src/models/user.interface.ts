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
    id: string;
}

interface IUserOwn extends UserIdField, UserFields, UserEmailField {
}

type UserLoginProps = UserEmailField & UserPasswordField;
type UserSignUpProps = UserFields & UserPasswordField & UserIdField;

// type UserUpdateProps = UserFields;

interface changePasswordProps {
    newPassword: string;
    confirmPassword: string;
}

interface ResetPasswordProps {
    id: string;
    newPassword: string;
}

interface UserInterface extends UserFields, UserEmailField {
    role: 'user' | 'admin';
}

type UserWithToken = UserInterface & { access_token: string };

export type {
    UserInterface,
    UserFields,
    UserIdField,
    UserLoginProps,
    UserSignUpProps,
    UserEmailField,
    ResetPasswordProps,
    UserWithToken,
    changePasswordProps,
    IUserOwn,
    // UserUpdateProps,
};
