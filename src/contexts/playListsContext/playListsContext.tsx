import axios from "axios";
import { playListTypes } from "contexts/playListsContext/playListsContext.type";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { useAuth } from "contexts/authContext/authContext";
import { showToast } from "components/toast/toast";

const playListsContext = createContext<{
	playLists: Array<playListTypes>;
	setPlayLists: Function;
}>({
	playLists: [],
	setPlayLists: () => {},
});

const PlayListsProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	const [playLists, setPlayLists] = useState([]);
	const { token } = useAuth();

	useEffect(() => {
		token &&
			(async () => {
				try {
					const res = await axios.get("/api/user/playlists", {
						headers: { authorization: token },
					});
					setPlayLists(res.data.playlists);
				} catch (error) {
					showToast("error", "Something went wrong");
				}
			})();
	}, [token]);

	return (
		<playListsContext.Provider value={{ playLists, setPlayLists }}>
			{children}
		</playListsContext.Provider>
	);
};

const usePlayLists = () => useContext(playListsContext);

export { PlayListsProvider, usePlayLists };
