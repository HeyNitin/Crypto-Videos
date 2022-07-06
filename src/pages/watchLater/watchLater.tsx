import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Sidebar } from "components/sidebar/sidebar";
import { useWatchLater } from "contexts/watchLaterContext/watchLaterContext";
import { WatchLaterCard } from "components/cards/watchLaterCard";
import { video } from "contexts/videoContext/videoContext.type";

const WatchLater = (): JSX.Element => {
	const { watchLater, setWatchLater } = useWatchLater();

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
					{watchLater.map((item: video) => (
						<WatchLaterCard
							key={item._id}
							video={item}
							setWatchLater={setWatchLater}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export { WatchLater };
