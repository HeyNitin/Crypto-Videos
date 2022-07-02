import { createContext, useContext, useReducer } from "react";
import { childTypes, state } from "contexts/videoContext/videoContext.type";
import { videoReducer } from "contexts/videoContext/videoReducer";

const initialValue: state = {
	All: true,
	Crypto: false,
	"Web 3.0": false,
	Blockchain: false,
	NFTs: false,
	videos: [],
};

const videoContext = createContext<{
	state: state;
	dispatch: Function;
}>({ state: initialValue, dispatch: () => {} });

const VideoProvider = ({ children }: childTypes): JSX.Element => {
	const [state, dispatch] = useReducer(videoReducer, initialValue);

	return (
		<videoContext.Provider value={{ state, dispatch }}>
			{children}
		</videoContext.Provider>
	);
};

const useVideo = () => useContext(videoContext);

export { VideoProvider, useVideo };
