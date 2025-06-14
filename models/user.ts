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
	fullname: string;
	phoneNumber: string;
	country: string;
}
