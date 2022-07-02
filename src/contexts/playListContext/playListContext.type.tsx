import { video } from "contexts/videoContext/videoContext.type";

export type playListTypes = {
	title: string;
	descirption: string;
	_id: string;
	videos: video[];
};
