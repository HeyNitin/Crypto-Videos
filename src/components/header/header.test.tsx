import { getFirstName } from "services/getFirstNameService";

test("Testing the function to get first name of user", () => {
	let initialValue = "Nitin Kalra";
	let expectedValue = "Nitin";

	let value = getFirstName(initialValue);

	expect(value).toBe(expectedValue);
});
