import { getVideoId } from "services/getVideoIdService";

test("It extracts video id from a youtube link", () => {
	let initialValue =
		"https://www.youtube.com/watch?v=2_TK1Go8clQ&ab_channel=AndreiJikh";
	let expectedValue = "2_TK1Go8clQ";

	let value = getVideoId(initialValue);

	expect(value).toBe(expectedValue);
});
