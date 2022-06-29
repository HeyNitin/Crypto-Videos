import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Sidebar } from "components/sidebar";

const History = (): JSX.Element => {
	useDocumentTitle("History");
	return (
		<div>
			<Sidebar />
		</div>
	);
};

export { History };
