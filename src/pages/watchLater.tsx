import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Sidebar } from "components/sidebar";

const WatchLater = (): JSX.Element => {
	useDocumentTitle("Watch-later");
	return (
		<div>
			{" "}
			<Sidebar />
		</div>
	);
};

export { WatchLater };
