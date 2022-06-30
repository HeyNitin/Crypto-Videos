export type signupInitialValueTypes = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	errorMsg: string;
	error: boolean;
	tnc: boolean;
};

export type signupActionTypes =
	| { type: "Name"; payload: string }
	| { type: "E-mail"; payload: string }
	| { type: "Password"; payload: string }
	| { type: "ConfirmPassword"; payload: string }
	| { type: "Tnc"; payload: boolean }
	| { type: "Error"; payload: string };
