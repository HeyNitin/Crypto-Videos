import { state, action } from "contexts/videoContext/videoContext.type";

export const videoReducer = (state: state, action: action) => {
	switch (action.type) {
		case "Initialize":
			return {
				...state,
				videos: action.payload,
			};
		case "All":
			return {
				...state,
				All: true,
				"Web 3.0": false,
				Blockchain: false,
				NFTs: false,
				Crypto: false,
			};
		case "Blockchain":
			return {
				...state,
				All: false,
				"Web 3.0": false,
				Blockchain: true,
				NFTs: false,
				Crypto: false,
			};
		case "Web 3.0":
			return {
				...state,
				All: false,
				"Web 3.0": true,
				Blockchain: false,
				NFTs: false,
				Crypto: false,
			};
		case "NFTs":
			return {
				...state,
				All: false,
				"Web 3.0": false,
				Blockchain: false,
				NFTs: true,
				Crypto: false,
			};
		case "Crypto":
			return {
				...state,
				All: false,
				"Web 3.0": false,
				Blockchain: false,
				NFTs: false,
				Crypto: true,
			};

		default:
			return { ...state };
	}
};
