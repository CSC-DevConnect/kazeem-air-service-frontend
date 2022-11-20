export type User = {
  isEmailVerified: boolean;
  email: string;
  fullName: string;
  id: string;
  country: string;
  phoneNumber: string;
  gender: string;
};

export type Tokens = {
  access: {
    token: string;
    expires: string;
  };
  refresh: {
    token: string;
    expires: string;
  };
};

export type UserData = {
  user: User;
  tokens: Tokens;
} | null;

export type ChildrenContextProps = {
  children: React.ReactNode;
};
