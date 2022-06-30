import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { video } from "contexts/videoContext/videoContext.type";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ value }: { value: video }): JSX.Element => {
	const { img, creatorProfile, creator, title, views, videoLength } = value;
	const Navigate = useNavigate();
	return (
		<div className="shadow-card m-4 cursor-pointer w-72 grid dark:bg-white">
			<img
				className="shadow-md col-start-1 col-end-2 row-start-1 row-end-3 p-1"
				src={img}
				alt="thumbnail"
			></img>
			<div className=" col-start-1 col-end-2 row-start-3 row-end-4 text-black truncate flex flex-row items-center">
				<img
					className="rounded-full h-8 w-8 m-2 mt-0"
					src={creatorProfile}
					alt="creator-profle"
				></img>
				<div className="truncate p-2">
					<p className="truncate text-sm font-semibold">{title}</p>
					<p className="text-xs">{creator}</p>
					<div className="text-xs flex items-center gap-1">
						<span className="material-icons-outlined text-sm pt-0.5">
							visibility
						</span>
						<p>{views} views</p>
					</div>
				</div>
				<div className="flex flex-col justify-end">
					<FontAwesomeIcon
						onClick={() => Navigate("/login")}
						icon={faEllipsisVertical}
						className={"w-4 ml-auto pt-4 pr-2"}
					/>
					<div className="flex flex-row items-center  p-2 text-xs mt-1.5">
						<span className="material-icons-outlined text-sm pt-0.5">
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
