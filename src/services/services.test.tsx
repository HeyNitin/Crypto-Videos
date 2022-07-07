import { getFirstName } from "services/getFirstNameService";
import {
	nameValidator,
	emailValidator,
	passwordValidator,
} from "services/validatorServices";

test("Testing the function to get first name of user", () => {
	let initialValue = "Nitin Kalra";
	let expectedValue = "Nitin";

	let value = getFirstName(initialValue);

	expect(value).toBe(expectedValue);
});

describe("Testing Name validator", () => {
	test("Testing wrong format", () => {
		let name = "Nitin";
		let result = nameValidator(name);

		expect(result).toBe(false);
	});
	test("Testing correct format", () => {
		let name = "Nitin Kalra";
		let result = nameValidator(name);

		expect(result).toBe(true);
	});
});

describe("Testing Email validator", () => {
	test("Testing wrong format", () => {
		let email = "Nitin$gmail.com";
		let result = emailValidator(email);

		expect(result).toBe(false);
	});
	test("Testing correct format", () => {
		let email = "Nitin@cryptovideos.com";
		let result = emailValidator(email);

		expect(result).toBe(true);
	});
});

describe("Testing password validator", () => {
	test("Testing wrong format", () => {
		let password = "Nitin";
		let result = passwordValidator(password);

		expect(result).toBe(false);
	});
	test("Testing correct format", () => {
		let password = "Password12@";
		let result = passwordValidator(password);

		expect(result).toBe(true);
	});
});
