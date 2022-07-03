import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Sidebar } from "components/sidebar/sidebar";
import { usePlayLists } from "contexts/playListsContext/playListsContext";
import { useNavigate } from "react-router-dom";
import { useLikedVideos } from "contexts/likedVideosContext/likedVideosContext";
import { useWatchLater } from "contexts/watchLaterContext/watchLaterContext";

const Playlist = (): JSX.Element => {
	const { playLists } = usePlayLists();
	const { watchLater } = useWatchLater();
	const { likedVideos } = useLikedVideos();
	const Navigate = useNavigate();

	useDocumentTitle("Playlists");
	return (
		<div>
			<Sidebar />
			<div className="lg:ml-60 flex flex-col">
				<p className="text-3xl m-4 font-semibold p-4 mx-auto">All Playlists</p>
				<div className="grid grid-cols-playlists gap-8 mx-8 cursor-pointer">
					<div
						onClick={() => Navigate("/watch-later")}
						className="p-4 text-xl shadow-card flex font-semibold"
					>
						<p>
							Watch later .{" "}
							{watchLater.length === 1
								? watchLater.length + " Video"
								: watchLater.length + " Videos"}
						</p>
						<span className="material-symbols-outlined ml-auto items-center text-2xl">
							open_in_new
						</span>
					</div>
					<div
						onClick={() => Navigate("/liked-videos")}
						className="p-4 text-xl shadow-card flex items-center cursor-pointer font-semibold"
					>
						<p>
							Liked videos .{" "}
							{likedVideos.length === 1
								? likedVideos.length + " Video"
								: likedVideos.length + " Videos"}
						</p>
						<span className="material-symbols-outlined ml-auto text-2xl items-center">
							open_in_new
						</span>
					</div>
					{playLists.map((item) => {
						return (
							<div
								onClick={() => Navigate(`/playlists/${item._id}`)}
								key={item._id}
								className="p-4 text-xl shadow-card flex items-center cursor-pointer font-semibold"
							>
								<p>
									{item.title} .{" "}
									{item.videos.length === 1
										? item.videos.length + " Video"
										: item.videos.length + " Videos"}
								</p>
								<span className="material-symbols-outlined ml-auto text-2xl items-center">
									open_in_new
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export { Playlist };
