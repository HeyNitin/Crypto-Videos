import {
	signupInitialValueTypes,
	signupActionTypes,
} from "pages/signup/signupTypes";

const signupRedcuer = (
	state: signupInitialValueTypes,
	action: signupActionTypes
) => {
	switch (action.type) {
		case "Name":
			return { ...state, name: action.payload };
		case "E-mail":
			return { ...state, email: action.payload };
		case "Password":
			return { ...state, password: action.payload };
		case "ConfirmPassword":
			return { ...state, confirmPassword: action.payload };
		case "Tnc":
			return { ...state, tnc: action.payload };
		case "Error":
			return {
				...state,
				error: true,
				errorMsg: action.payload,
			};

		default:
			return { ...state };
	}
};

export { signupRedcuer };
