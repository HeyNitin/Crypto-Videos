import axios from "axios";
import { playListTypes } from "contexts/playListContext/playListContext.type";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { useAuth } from "contexts/authContext/authContext";
import { showToast } from "components/toast/toast";

const playListContext = createContext<{
	playList: Array<playListTypes>;
	setPlayList: Function;
}>({
	playList: [],
	setPlayList: () => {},
});

const PlayListProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	const [playList, setPlayList] = useState([]);
	const { token } = useAuth();

	useEffect(() => {
		token &&
			(async () => {
				try {
					const res = await axios.get("/api/user/playlists", {
						headers: { authorization: token },
					});
					setPlayList(res.data.playlists);
				} catch (error) {
					showToast("error", "Something went wrong");
				}
			})();
	}, [token]);

	return (
		<playListContext.Provider value={{ playList, setPlayList }}>
			{children}
		</playListContext.Provider>
	);
};

const usePlayList = () => useContext(playListContext);

export { PlayListProvider, usePlayList };
