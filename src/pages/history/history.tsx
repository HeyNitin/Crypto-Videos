import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Sidebar } from "components/sidebar/sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "contexts/authContext/authContext";
import { showToast } from "components/toast/toast";
import { video } from "contexts/videoContext/videoContext.type";
import { HistoryCard } from "components/cards/historyCard";

const History = (): JSX.Element => {
	useDocumentTitle("History");
	const { token } = useAuth();
	const [history, setHistory] = useState([]);

	useEffect(() => {
		if (token) {
			(async () => {
				try {
					let res = await axios.get("api/user/history", {
						headers: { authorization: token },
					});
					setHistory(res.data.history.reverse());
				} catch (error) {
					showToast(
						"error",
						"Something went wrong while trying to load history"
					);
				}
			})();
		}
	}, [token]);

	const emptyHistory = async () => {
		try {
			const res = await axios.delete("api/user/history/all", {
				headers: { authorization: token },
			});
			setHistory(res.data.history);
			showToast("success", "History cleared!");
		} catch (error) {
			showToast("error", "Something went wrong");
		}
	};

	return (
		<div>
			<Sidebar />
			<div className="lg:ml-60 p-16 dark:bg-slate-600 flex flex-col gap-12">
				<div className="flex items-baseline gap-4">
					<p className="font-semibold text-2xl">History .</p>
					<p className="text-md">
						{history.length === 1
							? history.length + " Video"
							: history.length + " Videos"}
					</p>
					<span
						onClick={() => emptyHistory()}
						className="material-symbols-outlined ml-auto cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-500 px-2 text-2xl"
					>
						delete
					</span>
				</div>
				<div className="flex flex-col gap-8">
					{history.map((item: video) => (
						<HistoryCard key={item._id} video={item} setHistory={setHistory} />
					))}
				</div>
			</div>
		</div>
	);
};

export { History };
