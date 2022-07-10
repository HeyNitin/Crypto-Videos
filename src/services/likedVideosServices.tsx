import axios from "axios";
import { showToast } from "components/toast/toast";

const removeFromLikedVideos = async ({
	token,
	_id,
	setLikedVideos,
}: {
	token: string;
	_id: string;
	setLikedVideos: Function;
}) => {
	try {
		const res = await axios.delete(`/api/user/likes/${_id}`, {
			headers: { authorization: token },
		});
		setLikedVideos(res.data.likes);
		showToast("success", "item has been removed from liked videos");
	} catch (error) {
		showToast(
			"error",
			"Something went wrong while trying to remove item from liked videos"
		);
	}
};

export { removeFromLikedVideos };
