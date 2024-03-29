import { useNavigate } from "react-router-dom";
import { useVideo } from "contexts/videoContext/videoContext";

type categoryCardTypes = {
	id: number;
	img: string;
	title: string;
	categoryName: string;
};

const CategoryCard = ({
	id,
	img,
	title,
	categoryName,
}: categoryCardTypes): JSX.Element => {
	const Navigate = useNavigate();
	const { dispatch } = useVideo();
	return (
		<div
			key={id}
			onClick={() => {
				dispatch({ type: categoryName });
				Navigate("/explore");
			}}
			className="shadow-card cursor-pointer w-72 h-40 grid"
		>
			<img
				className="col-start-1 col-end-2 row-start-1 row-end-3 w-full h-full"
				src={img}
				alt="thumbnail"
			></img>
			<div className="bg-slate-600 dark:bg-slate-300 h-20 opacity-90 col-start-1 col-end-2 row-start-2 row-end-3 mt-auto"></div>
			<div className=" col-start-1 col-end-2 row-start-2 row-end-3 justify-self-center z-10 self-center text-lg text-white dark:text-black">
				{title}
			</div>
		</div>
	);
};

export { CategoryCard };
