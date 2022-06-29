import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Sidebar } from "components/sidebar/sidebar";
import { VideoCard } from "components/cards/videoCard";
import { useVideo } from "contexts/videoContext/videoContext";
import axios from "axios";
import { showToast } from "components/toast/toast";
import { useEffect } from "react";
import { video } from "contexts/videoContext/videoContext.type";

const Explore = (): JSX.Element => {
	const { state, dispatch } = useVideo();

	const applyFilteres = (product: video) => {
		return state.All
			? true
			: state.Blockchain
			? product.category === "Blockchain"
				? true
				: false
			: state.Crypto
			? product.category === "Crypto"
				? true
				: false
			: state.NFTs
			? product.category === "NFTs"
				? true
				: false
			: state["Web 3.0"]
			? product.category === "Web 3.0"
				? true
				: false
			: false;
	};

	useDocumentTitle("Explore");

	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get("/api/videos");
				dispatch({ type: "Initialize", payload: res.data.videos });
			} catch (error) {
				showToast("error", "Something went wrong while trying to load videos");
			}
		})();
	}, [dispatch]);

	const filteredVideos = state.videos.filter(applyFilteres);

	return (
		<div>
			<Sidebar />
			<div className="lg:ml-60 p-4 dark:bg-slate-600">
				<div className="flex flex-row gap-4 pl-2 pb-2 chips">
					<div
						onClick={() => dispatch({ type: "All" })}
						className={`rounded-xl cursor-pointer p-1 hover:bg-slate-200 dark:hover:bg-slate-500 px-3 ${
							state.All && "bg-slate-200 dark:bg-slate-500"
						}`}
					>
						All
					</div>
					<div
						onClick={() => dispatch({ type: "Blockchain" })}
						className={`rounded-xl cursor-pointer p-1 hover:bg-slate-200 dark:hover:bg-slate-500 px-3 ${
							state.Blockchain && "bg-slate-200 dark:bg-slate-500"
						}`}
					>
						Blockchain
					</div>
					<div
						onClick={() => dispatch({ type: "Crypto" })}
						className={`rounded-xl cursor-pointer p-1 hover:bg-slate-200 dark:hover:bg-slate-500 px-3 ${
							state.Crypto && "bg-slate-200 dark:bg-slate-500"
						}`}
					>
						Crypto
					</div>
					<div
						onClick={() => dispatch({ type: "Web 3.0" })}
						className={`rounded-xl cursor-pointer p-1 hover:bg-slate-200 dark:hover:bg-slate-500 px-3 ${
							state["Web 3.0"] && "bg-slate-200 dark:bg-slate-500"
						}`}
					>
						Web 3.0
					</div>
					<div
						onClick={() => dispatch({ type: "NFTs" })}
						className={`rounded-xl cursor-pointer p-1 hover:bg-slate-200 dark:hover:bg-slate-500 px-3 ${
							state.NFTs && "bg-slate-200 dark:bg-slate-500"
						}`}
					>
						NFTs
					</div>
				</div>
				<div className="grid grid-cols-categories md:gap-2 md:p-2 justify-items-center">
					{filteredVideos.map((item) => (
						<VideoCard key={item._id} value={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export { Explore };
