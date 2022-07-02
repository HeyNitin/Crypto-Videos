import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Sidebar } from "components/sidebar/sidebar";

const Playlist = (): JSX.Element => {
	useDocumentTitle("Playlist");
	return (
		<div>
			{" "}
			<Sidebar />
		</div>
	);
};

export { Playlist };
