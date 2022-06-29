import { Routes as R, Route } from "react-router-dom";

import { Homepage } from "pages/homepage/homepage";
import { Explore } from "pages/explore/explore";
import { Playlist } from "pages/playlists/playlists";
import { WatchLater } from "pages/watchLater/watchLater";
import { LikedVideos } from "pages/likedVideos/likedVideos";
import { History } from "pages/history/history";
import { Login } from "pages/login/login";
import { Signup } from "pages/signup/signup";
import { Error } from "pages/error/error";

const Routes = (): JSX.Element => {
	return (
		<div className=" mt-20 min-h-[calc(100vh-5rem)] dark:bg-slate-600 dark:text-white">
			<R>
				<Route path="/" element={<Homepage />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/playlists" element={<Playlist />} />
				<Route path="/watch-later" element={<WatchLater />} />
				<Route path="/liked-videos" element={<LikedVideos />} />
				<Route path="/history" element={<History />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<Signup />} />
				<Route path="*" element={<Error />} />
			</R>
		</div>
	);
};

export { Routes };
