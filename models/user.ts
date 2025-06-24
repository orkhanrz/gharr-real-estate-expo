import { IProperty } from "./property";

export interface UserInfo {
  _id: string;
  username: string;
  password: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  country: string;
  type: string;
  image: string;
  favorites: IProperty[];
}

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

export interface Token {
  exp: string;
  iat: string;
  id: string;
}
