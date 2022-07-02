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
import RequireAuth from "components/auth/requireAuth";
import RequireNoAuth from "components/auth/requireNoAuth";

const Routes = (): JSX.Element => {
	return (
		<div className=" mt-20 min-h-[calc(100vh-5rem)] dark:bg-slate-600 dark:text-white">
			<R>
				<Route path="/" element={<Homepage />} />
				<Route path="/explore" element={<Explore />} />
				<Route
					path="/playlists"
					element={
						<RequireAuth>
							<Playlist />
						</RequireAuth>
					}
				/>
				<Route
					path="/watch-later"
					element={
						<RequireAuth>
							<WatchLater />
						</RequireAuth>
					}
				/>
				<Route
					path="/liked-videos"
					element={
						<RequireAuth>
							<LikedVideos />
						</RequireAuth>
					}
				/>
				<Route
					path="/history"
					element={
						<RequireAuth>
							<History />
						</RequireAuth>
					}
				/>
				<Route
					path="/login"
					element={
						<RequireNoAuth>
							<Login />
						</RequireNoAuth>
					}
				/>
				<Route
					path="/signup"
					element={
						<RequireNoAuth>
							<Signup />
						</RequireNoAuth>
					}
				/>
				<Route path="*" element={<Error />} />
			</R>
		</div>
	);
};

export { Routes };
