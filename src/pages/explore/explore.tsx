import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Sidebar } from "components/sidebar/sidebar";
import { VideoCard } from "components/cards/videoCard";
import { useVideo } from "contexts/videoContext/videoContext";

const Explore = (): JSX.Element => {
	const { state, dispatch } = useVideo();

	useDocumentTitle("Explore");
	return (
		<div>
			<Sidebar />
			<div className="lg:ml-60 p-4 dark:bg-slate-600">
				<div className="flex flex-row gap-4 chips p-2">
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
				<div className="grid grid-cols-categories gap-4 p-4 justify-items-center">
					{state.filteredVideos.map((item) => (
						<VideoCard key={item._id} value={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export { Explore };
