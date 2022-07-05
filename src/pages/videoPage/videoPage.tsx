import axios from "axios";
import { showToast } from "components/toast/toast";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { video } from "contexts/videoContext/videoContext.type";
import { Sidebar } from "components/sidebar/sidebar";
import { useAuth } from "contexts/authContext/authContext";
import { useWatchLater } from "contexts/watchLaterContext/watchLaterContext";
import { removeFromWatchLater } from "services/watchLaterServices";
import { useLikedVideos } from "contexts/likedVideosContext/likedVideosContext";
import { removeFromLikedVideos } from "services/likedVideosServices";
import { AddToPlaylistModal } from "components/modal/AddToPlaylistModal";

const VideoPage = () => {
	const { videoId } = useParams();
	const [video, setVideo] = useState<video>();
	const { token } = useAuth();
	const { watchLater, setWatchLater } = useWatchLater();
	const Navigate = useNavigate();
	const location = useLocation();
	const [inWatchlist, setInWatchlist] = useState(false);
	const [inLiked, setInLiked] = useState(false);
	const { likedVideos, setLikedVideos } = useLikedVideos();
	const [showModal, setShowModal] = useState(false);

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

	useEffect(() => {
		setInLiked(false);
		for (let item of likedVideos) {
			if (item._id === videoId) {
				setInLiked(true);
				break;
			}
		}
	}, [likedVideos, videoId]);

	const addToWatchLater = async () => {
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
	};

	const addToLikedVideos = async () => {
		try {
			const res = await axios.post(
				"/api/user/likes",
				{ video },
				{ headers: { authorization: token } }
			);
			setLikedVideos(res.data.likes);
			showToast("success", "item has been added to liked videos");
		} catch (error) {
			showToast(
				"error",
				"Something went wrong while trying to add item to liked videos"
			);
		}
	};

	return (
		<div>
			<Sidebar />
			<div className="lg:ml-60 p-4 dark:bg-slate-600">
				<iframe
					className="w-full h-100 mx-auto rounded-md"
					src={`https://www.youtube.com/embed/${video?._id}`}
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
								<div className="flex items-center text-xs gap-1">
									<span className="material-icons-outlined text-sm mt-0.5">
										timer
									</span>
									<p className="mt-0.5">{video?.videoLength}</p>
								</div>
							</div>
						</div>
						<div
							onClick={() =>
								token
									? inLiked
										? removeFromLikedVideos({
												_id: video?._id || "",
												token,
												setLikedVideos,
										  })
										: addToLikedVideos()
									: Navigate("/login", {
											state: { from: { pathname: location.pathname } },
									  })
							}
							className="ml-auto flex gap-1 cursor-pointer items-center"
						>
							{inLiked ? (
								<span className="material-icons">thumb_up</span>
							) : (
								<span className="material-symbols-outlined">thumb_up</span>
							)}
							<p className="font-semibold">{inLiked ? "LIKED" : "LIKE"}</p>
						</div>
						<div
							onClick={() =>
								token
									? inWatchlist
										? removeFromWatchLater({
												_id: video?._id || "",
												token,
												setWatchLater,
										  })
										: addToWatchLater()
									: Navigate("/login", {
											state: { from: { pathname: location.pathname } },
									  })
							}
							className="flex gap-1 cursor-pointer items-center"
						>
							<span className="material-icons-outlined">
								{inWatchlist ? "task_alt" : "watch_later"}
							</span>
							<p className="font-semibold">WATCH LATER</p>
						</div>
						<div
							onClick={() =>
								token
									? setShowModal(true)
									: Navigate("/login", {
											state: { from: { pathname: location.pathname } },
									  })
							}
							className="flex gap-1 cursor-pointer relative items-center"
						>
							<span className="material-icons-outlined">playlist_add</span>
							<p className="font-semibold">SAVE TO PLAYLIST</p>
						</div>
						{showModal && video && (
							<AddToPlaylistModal
								key={video._id}
								video={video}
								setShowModal={setShowModal}
								inWatchlist={inWatchlist}
								inLiked={inLiked}
								addToLikedVideos={addToLikedVideos}
								addToWatchLater={addToWatchLater}
								setLikedVideos={setLikedVideos}
								setWatchLater={setWatchLater}
							/>
						)}
					</div>
					<div>{video?.description}</div>
				</div>
			</div>
		</div>
	);
};

export { VideoPage };
