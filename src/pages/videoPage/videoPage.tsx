import axios from "axios";
import { showToast } from "components/toast/toast";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { video } from "contexts/videoContext/videoContext.type";
import { getVideoId } from "services/getVideoIdService";
import { Sidebar } from "components/sidebar/sidebar";
import { useAuth } from "contexts/authContext/authContext";
import { useWatchLater } from "contexts/watchLaterContext/watchLaterContext";
import { removeFromWatchLater } from "services/watchLaterServices/removeFromWatchLater";

const VideoPage = () => {
	const { videoId } = useParams();
	const [video, setVideo] = useState<video>();
	const { token } = useAuth();
	const { watchLater, setWatchLater } = useWatchLater();
	const Navigate = useNavigate();
	const location = useLocation();
	const [inWatchlist, setInWatchlist] = useState(false);

	useDocumentTitle(video?.title || "Video");

	useEffect(() => {
		(async () => {
			try {
				const {
					data: { video },
				} = await axios.get(`/api/video/${videoId}`);
				setVideo(video);
			} catch (error) {
				showToast(
					"error",
					"Somwthing went wrong while tring to load the video"
				);
			}
		})();
	}, [videoId]);

	useEffect(() => {
		if (token && video) {
			(async () => {
				try {
					await axios.post(
						"/api/user/history",
						{ video },
						{
							headers: { authorization: token },
						}
					);
				} catch (error) {
					if (
						!(
							(error as { response: { status: Number } }).response.status ===
							409
						)
					) {
						showToast("error", "Something went wrong");
					}
				}
			})();
		}
	}, [video, token, videoId]);

	useEffect(() => {
		setInWatchlist(false);
		for (let item of watchLater) {
			if (item._id === videoId) {
				setInWatchlist(true);
				break;
			}
		}
	}, [watchLater, videoId]);

	const addToWatchLater = async () => {
		if (token) {
			try {
				const res = await axios.post(
					"/api/user/watchlater",
					{ video },
					{ headers: { authorization: token } }
				);
				setWatchLater(res.data.watchlater);
				showToast("success", "item has been added to watch later");
			} catch (error) {
				showToast(
					"error",
					"Something went wrong while trying to add item to watch later"
				);
			}
		} else {
			Navigate("/login", {
				state: { from: { pathname: location.pathname } },
			});
		}
	};

	return (
		<div>
			<Sidebar />
			<div className="lg:ml-60 p-4 dark:bg-slate-600">
				<iframe
					className="w-full h-100 mx-auto rounded-md"
					src={`https://www.youtube.com/embed/${getVideoId(
						video?.youtubeLink || ""
					)}`}
					title="YouTube video player"
					frameBorder={0}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<div className="w-video">
					<p className="text-xl font-bold">{video?.title}xx</p>
					<div className="flex gap-4 items-center">
						<img
							className="rounded-full h-12 w-12 m-4"
							src={video?.creatorProfile}
							alt="creator-profle"
						></img>
						<div className="m-4">
							<p className="text-lg font-semibold">{video?.creator}</p>
							<div className="flex gap-4">
								<div className="flex items-center gap-1 text-xs">
									<span className="material-icons-outlined text-sm mt-0.5">
										visibility
									</span>
									<p>{video?.views} views</p>
								</div>
								<div className="flex items-center text-xs">
									<span className="material-icons-outlined text-sm mt-0.5">
										timer
									</span>
									<p>{video?.videoLength}</p>
								</div>
							</div>
						</div>
						<div className="ml-auto flex gap-1 cursor-pointer">
							<span className="material-symbols-outlined">thumb_up</span>
							<p className="font-semibold">LIKE</p>
						</div>
						<div
							onClick={() =>
								inWatchlist
									? token
										? removeFromWatchLater({
												_id: video?._id || "",
												token,
												setWatchLater,
										  })
										: Navigate("/login", {
												state: { from: { pathname: location.pathname } },
										  })
									: addToWatchLater()
							}
							className="flex gap-1 cursor-pointer"
						>
							<span className="material-icons-outlined">
								{inWatchlist ? "task_alt" : "watch_later"}
							</span>
							<p className="font-semibold">WATCH LATER</p>
						</div>
						<div className="flex gap-1 cursor-pointer">
							<span className="material-icons-outlined">playlist_add</span>
							<p className="font-semibold">SAVE TO PLAYLIST</p>
						</div>
					</div>
					<div>{video?.description}</div>
				</div>
			</div>
		</div>
	);
};

export { VideoPage };
