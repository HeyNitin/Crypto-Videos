import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Sidebar } from "components/sidebar";
import { VideoCard } from "components/cards/videoCard";
import { useVideo } from "contexts/videoContext/videoContext";

const Explore = (): JSX.Element => {
	const { state, dispatch } = useVideo();

	useDocumentTitle("Explore");
	return (
		<div>
			<Sidebar />
			<div className="lg:ml-60 p-4 dark:bg-slate-600">
				<div className="flex flex-row gap-4 chips p-2 w-screen">
					<div className="rounded-xl cursor-pointer p-1 hover:bg-slate-300 dark:hover:bg-slate-500 px-3">
						All
					</div>
					<div className="rounded-xl cursor-pointer p-1 hover:bg-slate-300 dark:hover:bg-slate-500 px-3">
						Blockchain
					</div>
					<div className="rounded-xl cursor-pointer p-1 hover:bg-slate-300 dark:hover:bg-slate-500 px-3">
						Crypto
					</div>
					<div className="rounded-xl cursor-pointer p-1 hover:bg-slate-300 dark:hover:bg-slate-500 px-3">
						Web 3.0
					</div>
					<div className="rounded-xl cursor-pointer p-1 hover:bg-slate-300 dark:hover:bg-slate-500 px-3">
						NFTs
					</div>
				</div>
				<div className="grid grid-cols-categories gap-8 p-4 justify-items-center">
					{state.videos.map((item) => (
						<VideoCard key={item._id} value={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export { Explore };
