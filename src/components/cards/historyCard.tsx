import { showToast } from "components/toast/toast";
import { video } from "contexts/videoContext/videoContext.type";
import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts/authContext/authContext";
import axios from "axios";

type historyCartTypes = {
	video: video;
	setHistory: Function;
};

const HistoryCard = ({ video, setHistory }: historyCartTypes): JSX.Element => {
	const {
		_id,
		img,
		creatorProfile,
		creator,
		title,
		views,
		videoLength,
		description,
	} = video;
	const Navigate = useNavigate();
	const { token } = useAuth();

	const removeFromHistory = async () => {
		try {
			let res = await axios.delete(`api/user/history/${_id}`, {
				headers: { authorization: token },
			});
			setHistory(res.data.history);
			showToast("success", "Video has been successfully removed from history");
		} catch (error) {
			showToast("error", "Couldn't remove the video");
		}
	};

	return (
		<div
			onClick={() => {
				Navigate(`/videos/${_id}`);
			}}
			className="flex flex-col sm:flex-row shadow-card p-4 gap-4 cursor-pointer"
		>
			<img src={img} alt="thumbnail" className=" sm:w-1/4 rounded-md"></img>
			<div className="flex flex-col sm:w-2/4 gap-2">
				<div className="flex">
					<p className="truncate max-w-2xl font-semibold">{title}</p>
				</div>
				<div className="flex items-center gap-2">
					<img
						className="rounded-full h-8 w-8 m-2"
						src={creatorProfile}
						alt="creator-profle"
					></img>
					<p className="">{creator}</p>
				</div>
				<p className="truncate">{description}</p>
				<div className="flex gap-4">
					<div className="flex items-center gap-1 text-xs">
						<span className="material-icons-outlined text-sm mt-0.5">
							visibility
						</span>
						<p>{views} views</p>
					</div>
					<div className="flex items-center text-xs">
						<span className="material-icons-outlined text-sm mt-0.5">
							timer
						</span>
						<p>{videoLength}</p>
					</div>
				</div>
			</div>
			<span
				onClick={(e) => {
					e.stopPropagation();
					removeFromHistory();
				}}
				className="material-symbols-outlined ml-auto cursor-pointer h-8 font- hover:bg-slate-200 dark:hover:bg-slate-500 text-2xl px-2"
			>
				close
			</span>
		</div>
	);
};

export { HistoryCard };
