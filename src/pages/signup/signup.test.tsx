import { signupRedcuer } from "pages/signup/signupReducer";

let initialValue = {
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
	errorMsg: "",
	error: false,
	tnc: false,
	dummyData: false
};

describe("Testing signup reducer", () => {
	test("testing name case", () => {
		let expectedValue = {
			name: "Nitin kalra",
			email: "",
			password: "",
			confirmPassword: "",
			errorMsg: "",
			error: false,
			tnc: false,
			dummyData: false
		};

		let state = signupRedcuer(initialValue, {
			type: "Name",
			payload: "Nitin kalra",
		});

		expect(state).toEqual(expectedValue);
	});
	test("testing email case", () => {
		let expectedValue = {
			name: "",
			email: "nikkalra88@gmail.com",
			password: "",
			confirmPassword: "",
			errorMsg: "",
			error: false,
			tnc: false,
			dummyData: false
		};

		let state = signupRedcuer(initialValue, {
			type: "E-mail",
			payload: "nikkalra88@gmail.com",
		});

		expect(state).toEqual(expectedValue);
	});
	test("testing password case", () => {
		let expectedValue = {
			name: "",
			email: "",
			password: "justfortest",
			confirmPassword: "",
			errorMsg: "",
			error: false,
			tnc: false,
			dummyData: false
		};

		let state = signupRedcuer(initialValue, {
			type: "Password",
			payload: "justfortest",
		});

		expect(state).toEqual(expectedValue);
	});
	test("testing confirm password case", () => {
		let expectedValue = {
			name: "",
			email: "",
			password: "",
			confirmPassword: "justfortest",
			errorMsg: "",
			error: false,
			tnc: false,
			dummyData: false
		};

		let state = signupRedcuer(initialValue, {
			type: "ConfirmPassword",
			payload: "justfortest",
		});

		expect(state).toEqual(expectedValue);
	});
	test("testing DummyData checked case", () => {
		let expectedValue = {
			name: "Nitin Kalra",
			email: "nitinnnnn@crypto.com",
			password: "Justfortest2@",
			confirmPassword: "Justfortest2@",
			errorMsg: "",
			error: false,
			tnc: false,
			dummyData: true
		};

		let state = signupRedcuer(initialValue, {
			type: "DummyData",
			payload: true,
		});

		expect(state).toEqual(expectedValue);
	});
	test("testing DummyData unchecked case", () => {
		let expectedValue = {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			errorMsg: "",
			error: false,
			tnc: false,
			dummyData: false
		};

		let state = signupRedcuer(initialValue, {
			type: "DummyData",
			payload: false,
		});

		expect(state).toEqual(expectedValue);
	});
	test("testing Tnc case", () => {
		let expectedValue = {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			errorMsg: "",
			error: false,
			tnc: true,
			dummyData: false
		};

		let state = signupRedcuer(initialValue, {
			type: "Tnc",
			payload: true,
		});

		expect(state).toEqual(expectedValue);
	});
	test("testing error case ", () => {
		let expectedValue = {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			errorMsg: "Error occured",
			error: true,
			tnc: false,
			dummyData: false
		};

		let state = signupRedcuer(initialValue, {
			type: "Error",
			payload: "Error occured",
		});

		expect(state).toEqual(expectedValue);
	});
});
