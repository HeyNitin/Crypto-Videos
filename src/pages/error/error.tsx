import { useDocumentTitle } from "hooks/useDocumentTitle";

const Error = (): JSX.Element => {
	useDocumentTitle("Error");
	return (
		<div className="flex w-full h-80">
			<div className="m-auto w-100 h-40 shadow-card flex">
				<p className="m-auto">This Page doesn't exist</p>
			</div>
		</div>
	);
};

export { Error };
