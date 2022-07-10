import axios from "axios";
import { showToast } from "components/toast/toast";
import { playListTypes } from "contexts/playListsContext/playListsContext.type";
import { video } from "contexts/videoContext/videoContext.type";

const removeFromPlaylist = async ({
	video,
	title,
	_id,
	setPlayLists,
	token,
}: {
	video: video;
	title: string;
	_id: string;
	setPlayLists: Function;
	token: string;
}) => {
	try {
		const res = await axios.delete(`/api/user/playlists/${_id}/${video._id}`, {
			headers: { authorization: token },
		});
		setPlayLists((prev: playListTypes[]) =>
			prev.map((item) =>
				item._id === res.data.playlist._id
					? { ...item, videos: res.data.playlist.videos }
					: item
			)
		);
		showToast("success", `Video has been removed from ${title}`);
	} catch (error) {
		showToast("error", `Couldn't remove video from ${title}`);
	}
};

export { removeFromPlaylist };
