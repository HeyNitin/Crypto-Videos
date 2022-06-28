import { ReactNode } from "react";

export type childTypes = {
	children?: ReactNode;
};

export type video = {
	_id: number;
	img: string;
	title: string;
	description: string;
	creator: string;
	creatorProfile: string;
	views: string;
	videoLength: string;
	youtubeLink: string;
	category: string;
};

export type state = {
	All: boolean;
	Crypto: boolean;
	"Web 3.0": boolean;
	Blockchain: boolean;
	NFTs: boolean;
	videos: video[];
	filteredVideos: video[];
};

export type action =
	| { type: "Initialize"; payload: video[] }
	| { type: "All" }
	| { type: "Crypto" }
	| { type: "Web 3.0" }
	| { type: "Blockchain" }
	| { type: "NFTs" };
