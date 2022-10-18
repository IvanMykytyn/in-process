interface forgotPasswordProps {
  email: string;
}

interface resetPasswordProps {
  id: string;
  token: string;
  password: string;
}

export type { forgotPasswordProps, resetPasswordProps };
