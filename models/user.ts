export interface UserSignIn {
  username: string;
  password: string;
}

export interface UserSignUp {
  username: string;
  password: string;
  email: string;
}

export interface UserComplete {
  fullName: string;
  phoneNumber: string;
  country: string;
}

export interface UserSignUpRequestBody {
  username: string;
  password: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  country: string;
}

export interface IAgent {
  image: string;
  fullName: string;
  type: string;
  email: string;
  phone: string;
}
