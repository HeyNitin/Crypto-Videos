import { loginInitialValueTypes, loginActionTypes } from "./loginTypes.type";

const loginReducer = (
	state: loginInitialValueTypes,
	action: loginActionTypes
) => {
	switch (action.type) {
		case "E-mail":
			return { ...state, email: action.payload };
		case "Password":
			return { ...state, password: action.payload };
		case "RememberMe":
			return { ...state, rememberMe: action.payload };
		case "Error":
			return {
				...state,
				error: true,
				errorMsg: action.payload,
			};
		case "DefaultCredentials":
			return action.payload
				? {
						...state,
						email: "Nitin@Cryptovideos.com",
						password: "justfortest",
						defaultCredentials: action.payload,
				  }
				: {
						...state,
						email: "",
						password: "",
						defaultCredentials: action.payload,
				  };
		default:
			return { ...state };
	}
};

export { loginReducer };
