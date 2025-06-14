import * as yup from "yup";
import { messages } from "./messages";

export const signInDefaultValues = {
	username: "",
	password: "",
};

export const signInValidationSchema = yup.object().shape({
	username: yup.string().required(messages.usernameRequired),
	password: yup.string().required(messages.passwordRequired),
});

export const signUpDefaultValues = {
	username: "",
	password: "",
	email: "",
};

export const signUpValidationSchema = yup.object().shape({
	username: yup
		.string()
		.min(3, messages.usernameMin)
		.required(messages.usernameRequired),
	password: yup
		.string()
		.min(8, messages.passwordMin)
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, messages.passwordValidation)
		.required(messages.passwordRequired),
	email: yup
		.string()
		.email(messages.emailNotValid)
		.min(5, messages.emailMin)
		.required(messages.emailRequired),
});

export const completeSignUpDefaultValues = {
	fullname: "",
	phoneNumber: "",
	country: "",
};

export const completeSignUpValidationSchema = yup.object().shape({
	fullname: yup.string().required(messages.fullNameRequired),
	phoneNumber: yup
		.string()
		.required(messages.phoneNumberRequired)
		.matches(/^\+?[0-9]{10,15}$/, messages.phoneNumberValidation),
	country: yup.string().required(messages.countryRequired),
});
