import axios from "axios";
import { showToast } from "components/toast/toast";
import { useAuth } from "contexts/authContext/authContext";
import { Sidebar } from "components/sidebar/sidebar";
import { usePlayLists } from "contexts/playListsContext/playListsContext";
import { video } from "contexts/videoContext/videoContext.type";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { playListTypes } from "contexts/playListsContext/playListsContext.type";
import { PlaylistVideoCart } from "components/cards/playlistVideosCard";

const PlaylistPage = (): JSX.Element => {
	const { playlistId } = useParams();
	const { token } = useAuth();
	const { playLists, setPlayLists } = usePlayLists();
	const [playlist, setPlaylist] = useState<playListTypes>();
	const Navigate = useNavigate();

	useEffect(() => {
		setPlaylist(playLists.find(({ _id }) => _id === playlistId));
	}, [playLists, playlistId]);

	const deletePlaylist = async () => {
		try {
			const res = await axios.delete(`/api/user/playlists/${playlistId}`, {
				headers: { authorization: token },
			});
			setPlayLists(res.data.playlists);
			Navigate("/playlists");
			showToast("success", "Playlist deleted!");
		} catch (error) {
			showToast("error", "Something went wrong");
		}
	};

	return (
		<div>
			<Sidebar />
			{playlist && (
				<div className="lg:ml-60 p-16 dark:bg-slate-600 flex flex-col gap-12">
					<div className="flex items-baseline gap-4">
						<p className="font-semibold text-2xl">{playlist.title} videos .</p>
						<p className="text-md">
							{playlist.videos.length === 1
								? playlist.videos.length + " Video"
								: playlist.videos.length + " Videos"}
						</p>
						<span
							onClick={() => deletePlaylist()}
							className="material-symbols-outlined ml-auto cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-500 px-2 text-2xl"
						>
							delete
						</span>
					</div>
					<div className="flex flex-col gap-8">
						{playlist.videos.length ? (
							playlist.videos.map((item: video) => (
								<PlaylistVideoCart
									playlist={playlist}
									video={item}
									setPlayLists={setPlayLists}
								/>
							))
						) : (
							<p className="mx-auto">
								Nothing is in here yet.{" "}
								<span
									onClick={() => Navigate("/explore")}
									className="font-semibold hover:underline cursor-pointer"
								>
									Go to explore page
								</span>
							</p>
						)}
					</div>
				</div>
			)}
		</div>
	);
};
export { PlaylistPage };
