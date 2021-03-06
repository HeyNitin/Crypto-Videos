import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have likes (Likes are set to 0 by default), History Array, Playlists Array (added Watch Later Playlist in it by default) by default
 * */

export const users = [
	{
		_id: 1,
		name: "Nitin Kalra",
		email: "nitin@cryptovideos.com",
		password: "justfortest",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
