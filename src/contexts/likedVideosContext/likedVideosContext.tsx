import { video } from "contexts/videoContext/videoContext.type";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { useAuth } from "contexts/authContext/authContext";
import axios from "axios";
import { showToast } from "components/toast/toast";

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
	const { token } = useAuth();

	useEffect(() => {
		token &&
			(async () => {
				try {
					const res = await axios.get("/api/user/likes", {
						headers: { authorization: token },
					});
					setLikedVideos(res.data.likes);
				} catch (error) {
					showToast("error", "Something went wrong");
				}
			})();
	}, [token]);

	return (
		<likedVideosContext.Provider value={{ likedVideos, setLikedVideos }}>
			{children}
		</likedVideosContext.Provider>
	);
};

const useLikedVideos = () => useContext(likedVideosContext);

export { LikedVideosProvider, useLikedVideos };
