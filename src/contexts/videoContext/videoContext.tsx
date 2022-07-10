import { createContext, useContext, useEffect, useReducer } from "react";
import { childTypes, state } from "contexts/videoContext/videoContext.type";
import { videoReducer } from "contexts/videoContext/videoReducer";
import axios from "axios";
import { showToast } from "components/toast/toast";

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

	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get("/api/videos");
				dispatch({ type: "Initialize", payload: res.data.videos });
			} catch (error) {
				showToast("error", "Something went wrong while trying to load videos");
			}
		})();
	}, [dispatch]);

	return (
		<videoContext.Provider value={{ state, dispatch }}>
			{children}
		</videoContext.Provider>
	);
};

const useVideo = () => useContext(videoContext);

export { VideoProvider, useVideo };
