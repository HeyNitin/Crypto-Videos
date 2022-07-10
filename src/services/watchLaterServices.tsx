import axios from "axios";
import { showToast } from "components/toast/toast";

const removeFromWatchLater = async ({
	token,
	_id,
	setWatchLater,
}: {
	token: string;
	_id: string;
	setWatchLater: Function;
}) => {
	try {
		const res = await axios.delete(`/api/user/watchlater/${_id}`, {
			headers: { authorization: token },
		});
		setWatchLater(res.data.watchlater);
		showToast("success", "item has been removed from watch later");
	} catch (error) {
		showToast(
			"error",
			"Something went wrong while trying to remove item from watch later"
		);
	}
};

export { removeFromWatchLater };
