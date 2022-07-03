import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Sidebar } from "components/sidebar/sidebar";
import { useEffect } from "react";
import { useLikedVideos } from "contexts/likedVideosContext/likedVideosContext";
import { showToast } from "components/toast/toast";
import axios from "axios";
import { useAuth } from "contexts/authContext/authContext";
import { video } from "contexts/videoContext/videoContext.type";
import { LikedVideoCard } from "components/cards/likedVideoCard";
import { useNavigate } from "react-router-dom";

const LikedVideos = (): JSX.Element => {
	const { likedVideos, setLikedVideos } = useLikedVideos();
	const { token } = useAuth();
	const Navigate = useNavigate();

	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get("/api/user/likes", {
					headers: { authorization: token },
				});
				setLikedVideos(res.data.likes);
			} catch {
				showToast(
					"error",
					"Something went wrong while trying to load liked videos"
				);
			}
		})();
	}, [setLikedVideos, token]);

	useDocumentTitle("Liked videos");
	return (
		<div>
			<Sidebar />
			<div className="lg:ml-60 p-16 dark:bg-slate-600 flex flex-col gap-12">
				<div className="flex items-baseline gap-4">
					<p className="font-semibold text-2xl">Liked videos .</p>
					<p className="text-md">
						{likedVideos.length === 1
							? likedVideos.length + " Video"
							: likedVideos.length + " Videos"}
					</p>
				</div>
				<div className="flex flex-col gap-8">
					{likedVideos.length ? (
						likedVideos.map((item: video) => (
							<LikedVideoCard
								key={item._id}
								video={item}
								setLikedVideos={setLikedVideos}
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
		</div>
	);
};

export { LikedVideos };
