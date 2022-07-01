import { video } from "contexts/videoContext/videoContext.type";
import { createContext, ReactNode, useContext, useState } from "react";

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

	return (
		<watchLaterContext.Provider value={{ watchLater, setWatchLater }}>
			{children}
		</watchLaterContext.Provider>
	);
};

const useWatchLater = () => useContext(watchLaterContext);

export { WatchLaterProvider, useWatchLater };
