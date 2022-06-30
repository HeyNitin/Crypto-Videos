export type loginActionTypes =
	| {
			type: "E-mail";
			payload: string;
	  }
	| {
			type: "Password";
			payload: string;
	  }
	| {
			type: "RememberMe";
			payload: boolean;
	  }
	| {
			type: "Error";
			payload: string;
	  }
	| {
			type: "DefaultCredentials";
			payload: boolean;
	  };

export type loginInitialValueTypes = {
	email: string;
	password: string;
	errorMsg: string;
	error: boolean;
	rememberMe: boolean;
	defaultCredentials: boolean;
};
