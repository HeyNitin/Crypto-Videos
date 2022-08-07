import {
	signupInitialValueTypes,
	signupActionTypes,
} from "pages/signup/signupTypes.type";

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
		case "DummyData":
			return action.payload
				? {
						...state,
						name: "Nitin Kalra",
						email: "nitinnnnn@crypto.com",
						password: "Justfortest2@",
						confirmPassword: "Justfortest2@",
						dummyData: true,
				  }
				: {
						...state,
						name: "",
						email: "",
						password: "",
						confirmPassword: "",
						dummyData: false,
				  };
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
