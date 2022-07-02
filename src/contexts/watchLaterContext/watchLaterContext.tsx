import axios from "axios";
import { showToast } from "components/toast/toast";
import { useAuth } from "contexts/authContext/authContext";
import { video } from "contexts/videoContext/videoContext.type";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

const watchLaterContext = createContext<{
	watchLater: Array<video>;
	setWatchLater: Function;
}>({
	watchLater: [],
	setWatchLater: () => {},
});

const WatchLaterProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	const [watchLater, setWatchLater] = useState([]);
	const { token } = useAuth();

	useEffect(() => {
		token &&
			(async () => {
				try {
					const res = await axios.get("/api/user/watchlater", {
						headers: { authorization: token },
					});
					setWatchLater(res.data.watchlater);
				} catch (error) {
					showToast("error", "Something went wrong");
				}
			})();
	}, [token]);

	return (
		<watchLaterContext.Provider value={{ watchLater, setWatchLater }}>
			{children}
		</watchLaterContext.Provider>
	);
};

const useWatchLater = () => useContext(watchLaterContext);

export { WatchLaterProvider, useWatchLater };
