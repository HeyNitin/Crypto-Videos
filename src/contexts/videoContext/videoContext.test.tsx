import { videoReducer } from "contexts/videoContext/videoReducer";

let initialValue = {
	videos: [],
	All: true,
	Crypto: false,
	"Web 3.0": false,
	Blockchain: false,
	NFTs: false,
};

describe("Checking video Reducer", () => {
	test("checking type all", () => {
		let expectedData = {
			videos: [],
			All: true,
			Crypto: false,
			"Web 3.0": false,
			Blockchain: false,
			NFTs: false,
		};

		let getData = videoReducer(initialValue, { type: "All" });

		expect(getData).toEqual(expectedData);
	});

	test("checking type Crypto", () => {
		let expectedData = {
			videos: [],
			All: false,
			Crypto: true,
			"Web 3.0": false,
			Blockchain: false,
			NFTs: false,
		};

		let getData = videoReducer(initialValue, { type: "Crypto" });

		expect(getData).toEqual(expectedData);
	});
	test("checking type Blockchain", () => {
		let expectedData = {
			videos: [],
			All: false,
			Crypto: false,
			"Web 3.0": false,
			Blockchain: true,
			NFTs: false,
		};

		let getData = videoReducer(initialValue, { type: "Blockchain" });

		expect(getData).toEqual(expectedData);
	});
	test("checking type Web 3.0", () => {
		let expectedData = {
			videos: [],
			All: false,
			Crypto: false,
			"Web 3.0": true,
			Blockchain: false,
			NFTs: false,
		};

		let getData = videoReducer(initialValue, { type: "Web 3.0" });

		expect(getData).toEqual(expectedData);
	});
	test("checking type NFTs", () => {
		let expectedData = {
			videos: [],
			All: false,
			Crypto: false,
			"Web 3.0": false,
			Blockchain: false,
			NFTs: true,
		};

		let getData = videoReducer(initialValue, { type: "NFTs" });

		expect(getData).toEqual(expectedData);
	});
	test("checking type Initialize", () => {
		let expectedData = {
			videos: [],
			All: true,
			Crypto: false,
			"Web 3.0": false,
			Blockchain: false,
			NFTs: false,
		};

		let getData = videoReducer(initialValue, {
			type: "Initialize",
			payload: [],
		});

		expect(getData).toEqual(expectedData);
	});
});
