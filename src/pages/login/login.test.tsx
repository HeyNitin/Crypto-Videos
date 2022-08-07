import { loginReducer } from "pages/login/loginReducer";

describe("Testing login reducer", () => {
	const initialValue = {
		email: "",
		password: "",
		errorMsg: "",
		error: false,
		rememberMe: false,
		defaultCredentials: false,
	};

	test("Testing case E-mail", () => {
		let expectedState = {
			email: "nitin@cryptovideos.com",
			password: "",
			errorMsg: "",
			error: false,
			rememberMe: false,
			defaultCredentials: false,
		};

		let state = loginReducer(initialValue, {
			type: "E-mail",
			payload: "nitin@cryptovideos.com",
		});

		expect(state).toEqual(expectedState);
	});

	test("Testing case Password", () => {
		let expectedState = {
			email: "",
			password: "justfortest",
			errorMsg: "",
			error: false,
			rememberMe: false,
			defaultCredentials: false,
		};

		let state = loginReducer(initialValue, {
			type: "Password",
			payload: "justfortest",
		});

		expect(state).toEqual(expectedState);
	});
	test("Testing case RememberMe", () => {
		let expectedState = {
			email: "",
			password: "",
			errorMsg: "",
			error: false,
			rememberMe: true,
			defaultCredentials: false,
		};

		let state = loginReducer(initialValue, {
			type: "RememberMe",
			payload: true,
		});

		expect(state).toEqual(expectedState);
	});
	test("Testing case Error", () => {
		let expectedState = {
			email: "",
			password: "",
			errorMsg: "Error Occured",
			error: true,
			rememberMe: false,
			defaultCredentials: false,
		};

		let state = loginReducer(initialValue, {
			type: "Error",
			payload: "Error Occured",
		});

		expect(state).toEqual(expectedState);
	});
	test("Testing case Default checked credentials", () => {
		let expectedState = {
			email: "Nitin@Cryptovideos.com",
			password: "justfortest",
			errorMsg: "",
			error: false,
			rememberMe: false,
			defaultCredentials: true,
		};

		let state = loginReducer(initialValue, {
			type: "DefaultCredentials",
			payload: true,
		});

		expect(state).toEqual(expectedState);
	});
	test("Testing case Default unchecked credentials", () => {
		let expectedState = {
			email: "",
			password: "",
			errorMsg: "",
			error: false,
			rememberMe: false,
			defaultCredentials: false,
		};

		let state = loginReducer(initialValue, {
			type: "DefaultCredentials",
			payload: false,
		});

		expect(state).toEqual(expectedState);
	});
});
