import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Sidebar } from "components/sidebar/sidebar";
import { useWatchLater } from "contexts/watchLaterContext/watchLaterContext";
import { WatchLaterCard } from "components/cards/watchLaterCard";
import { video } from "contexts/videoContext/videoContext.type";
import { useNavigate } from "react-router-dom";

const WatchLater = (): JSX.Element => {
	const { watchLater, setWatchLater } = useWatchLater();
	const Navigate = useNavigate();

	useDocumentTitle("Watch-later");
	return (
		<div>
			<Sidebar />
			<div className="lg:ml-60 p-16 dark:bg-slate-600 flex flex-col gap-12">
				<div className="flex items-baseline gap-4">
					<p className="font-semibold text-2xl">Watch later .</p>
					<p className="text-md">
						{watchLater.length === 1
							? watchLater.length + " Video"
							: watchLater.length + " Videos"}
					</p>
				</div>
				<div className="flex flex-col gap-8">
					{watchLater.length ? (
						watchLater.map((item: video) => (
							<WatchLaterCard
								key={item._id}
								video={item}
								setWatchLater={setWatchLater}
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

export { WatchLater };
