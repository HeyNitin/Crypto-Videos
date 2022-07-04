import axios from "axios";
import { showToast } from "components/toast/toast";
import { useAuth } from "contexts/authContext/authContext";
import { usePlayLists } from "contexts/playListsContext/playListsContext";
import { playListTypes } from "contexts/playListsContext/playListsContext.type";
import { video } from "contexts/videoContext/videoContext.type";
import { useEffect, useState } from "react";
import { removeFromLikedVideos } from "services/likedVideosServices/removeFromLikedVideos";
import { removeFromPlaylist } from "services/playlistServices/removeFromPlaylistService";
import { removeFromWatchLater } from "services/watchLaterServices/removeFromWatchLater";

const AddToPlaylistModal = ({
	setShowModal,
	video,
	inWatchlist,
	inLiked,
	addToLikedVideos,
	addToWatchLater,
	setWatchLater,
	setLikedVideos,
}: {
	setShowModal: Function;
	video: video;
	inWatchlist: boolean;
	inLiked: boolean;
	addToLikedVideos: Function;
	addToWatchLater: Function;
	setWatchLater: Function;
	setLikedVideos: Function;
}): JSX.Element => {
	const [isAddingPlaylist, setIsAddingPlaylist] = useState(false);
	const [newPlaylistName, setNewPlaylistName] = useState("");
	const { token } = useAuth();
	const { playLists, setPlayLists } = usePlayLists();
	const [inPlaylists, setInPlaylists] = useState<Array<string>>([]);

	useEffect(() => {
		let result: Array<string> = [];
		for (let item of playLists) {
			if (item.videos.find((data) => data._id === video._id)) {
				result = [...result, item.title];
			}
		}
		setInPlaylists(result);
	}, [playLists, video._id]);

	const createNewPlaylist = async () => {
		if (
			playLists.filter((item) => item.title === newPlaylistName).length === 0
		) {
			try {
				const res = await axios.post(
					"/api/user/playlists",
					{ playlist: { title: newPlaylistName, desctiption: "" } },
					{
						headers: { authorization: token },
					}
				);
				setPlayLists(res.data.playlists);
				setNewPlaylistName("");
				showToast("success", `New Playlist ${newPlaylistName} created `);
			} catch (error) {
				showToast("error", "Something went wrong while creating new playlist");
			}
		} else {
			showToast("error", "Playlist already exists");
			setNewPlaylistName("");
		}
	};

	const addToPlaylist = async (title: string, _id: string) => {
		try {
			const res = await axios.post(
				`/api/user/playlists/${_id}`,
				{ video },
				{
					headers: { authorization: token },
				}
			);
			setPlayLists((prev: playListTypes[]) =>
				prev.map((item) =>
					item._id === res.data.playlist._id
						? { ...item, videos: res.data.playlist.videos }
						: item
				)
			);
			showToast("success", `Video has been added to ${title}`);
		} catch (error) {
			showToast("error", `Couldn't add video to ${title}`);
		}
	};

	return (
		<div className="absolute bottom-2/4 lg:bottom-1/3 right-0 left-0 mx-auto w-72 cursor-pointer z-30 bg-white dark:bg-slate-600 shadow-card rounded-md flex flex-col">
			<div className="flex flex-row dark:border-slate-600 dark:border-b-white border-b-black border p-2 rounded-md">
				<p className="text-lg">Save to...</p>
				<span
					onClick={() => setShowModal(false)}
					className="material-symbols-outlined ml-auto cursor-pointer h-8 font- hover:bg-slate-200 dark:hover:bg-slate-500 text-2xl px-2 "
				>
					close
				</span>
			</div>
			<div className="flex flex-col px-4 py-2 gap-1 text-lg">
				<div className="cursor-pointer flex items-center gap-2">
					<input
						onChange={() =>
							inWatchlist
								? removeFromWatchLater({
										_id: video?._id || "",
										token,
										setWatchLater,
								  })
								: addToWatchLater()
						}
						type={"checkbox"}
						id={"watch-later"}
						checked={inWatchlist}
					/>
					<label htmlFor="watch-later">Watch later</label>
				</div>
				<div className="cursor-pointer flex items-center gap-2">
					<input
						onChange={() =>
							inLiked
								? removeFromLikedVideos({
										_id: video?._id || "",
										token,
										setLikedVideos,
								  })
								: addToLikedVideos()
						}
						type={"checkbox"}
						id={"liked-videos"}
						checked={inLiked}
					/>
					<label htmlFor="liked-videos">Liked videos</label>
				</div>
				{playLists.map(({ title, _id }: { title: string; _id: string }) => {
					return (
						<div key={_id} className="cursor-pointer flex items-center gap-2">
							<input
								onChange={(e) =>
									(e.target as HTMLInputElement).checked
										? addToPlaylist(title, _id)
										: removeFromPlaylist({
												video,
												title,
												_id,
												setPlayLists,
												token,
										  })
								}
								type={"checkbox"}
								id={title}
								checked={
									inPlaylists.find((data) => data === title) ? true : false
								}
							/>
							<label htmlFor={title}>{title}</label>
						</div>
					);
				})}
			</div>
			{isAddingPlaylist ? (
				<form
					onSubmit={(e) => {
						e.preventDefault();
						createNewPlaylist();
					}}
					className="p-2 flex flex-col items-center"
				>
					<input
						autoFocus
						onChange={(e) =>
							setNewPlaylistName((e.target as HTMLInputElement).value)
						}
						value={newPlaylistName}
						className="m-2 mt-0 border border-black rounded w-60 dark:text-black focus:outline-none focus:bg-white"
						placeholder="Add playlist name"
					/>
					<button className="text-lg">Create</button>
				</form>
			) : (
				<div
					onClick={() => setIsAddingPlaylist(true)}
					className="flex items-center text-xl gap-1 mt-0 m-2"
				>
					<span className="material-symbols-outlined">add</span>
					<p>Create a new playlist</p>
				</div>
			)}
		</div>
	);
};

export { AddToPlaylistModal };
