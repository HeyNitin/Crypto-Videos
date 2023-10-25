import { video } from "contexts/videoContext/videoContext.type";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ value }: { value: video }): JSX.Element => {
	const { _id, img, creatorProfile, creator, title, views, videoLength } =
		value;
	const Navigate = useNavigate();

	return (
		<div
			onClick={() => {
				Navigate(`/videos/${_id}`);
			}}
			className="shadow-card m-4 cursor-pointer w-72 grid dark:bg-white"
		>
			<img
				className="shadow-md col-start-1 col-end-2 row-start-1 row-end-3 p-1 w-full"
				src={img}
				alt="thumbnail"
			></img>
			<div className=" col-start-1 col-end-2 row-start-3 row-end-4 text-black truncate flex flex-row items-center">
				<img
					className="rounded-full h-8 w-8 m-2 mt-0"
					src={creatorProfile}
					alt="creator-profle"
				></img>
				<div className="truncate p-2 w-full">
					<p className="truncate text-sm font-semibold">{title}</p>
					<p className="text-xs">{creator}</p>
					<div className="text-xs flex items-center gap-1 box-border">
						<span className="material-icons-outlined text-sm">visibility</span>
						<p>{views} views</p>
						<span className="material-icons-outlined text-sm ml-auto">
							timer
						</span>
						<p>{videoLength}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export { VideoCard };
