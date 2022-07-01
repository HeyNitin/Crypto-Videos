import { video } from "contexts/videoContext/videoContext.type";
import { createContext, ReactNode, useContext, useState } from "react";

const likedVideosContext = createContext<{
	likedVideos: Array<video>;
	setLikedVideos: Function;
}>({
	likedVideos: [],
	setLikedVideos: () => {},
});

const LikedVideosProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	const [likedVideos, setLikedVideos] = useState([]);

	return (
		<likedVideosContext.Provider value={{ likedVideos, setLikedVideos }}>
			{children}
		</likedVideosContext.Provider>
	);
};

const useLikedVideos = () => useContext(likedVideosContext);

export { LikedVideosProvider, useLikedVideos };
