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
type UpdateMeResponse = [UserFields];

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
    avatar_url: string | null;  
    isHidden?: boolean
}

type UserWithToken = UserInterface & { access_token: string };
interface ExtendedUserInterface extends UserInterface {
    isHidden: boolean
}
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
    UpdateMeResponse,
    ExtendedUserInterface,
};
