import { state, action } from "contexts/videoContext/videoContext.type";

export const videoReducer = (state: state, action: action) => {
	switch (action.type) {
		case "Initialize":
			return {
				...state,
				All: true,
				"Web 3.0": false,
				Blockchain: false,
				NFTs: false,
				Crypto: false,
				videos: action.payload,
				filteredVideos: action.payload,
			};
		case "All":
			return {
				...state,
				All: true,
				"Web 3.0": false,
				Blockchain: false,
				NFTs: false,
				Crypto: false,
				filteredVideos: state.videos,
			};
		case "Blockchain":
			return {
				...state,
				All: false,
				"Web 3.0": false,
				Blockchain: true,
				NFTs: false,
				Crypto: false,
				filteredVideos: state.videos.filter(
					(item) => item.category === action.type
				),
			};
		case "Web 3.0":
			return {
				...state,
				All: false,
				"Web 3.0": true,
				Blockchain: false,
				NFTs: false,
				Crypto: false,
				filteredVideos: state.videos.filter(
					(item) => item.category === action.type
				),
			};
		case "NFTs":
			return {
				...state,
				All: false,
				"Web 3.0": false,
				Blockchain: false,
				NFTs: true,
				Crypto: false,
				filteredVideos: state.videos.filter(
					(item) => item.category === action.type
				),
			};
		case "Crypto":
			return {
				...state,
				All: false,
				"Web 3.0": false,
				Blockchain: false,
				NFTs: false,
				Crypto: true,
				filteredVideos: state.videos.filter(
					(item) => item.category === action.type
				),
			};

		default:
			return { ...state };
	}
};
