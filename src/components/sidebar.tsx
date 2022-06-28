import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser, faHouse, faMagnifyingGlass, faRadio, faClock, faThumbsUp, faClockRotateLeft
} from "@fortawesome/free-solid-svg-icons";


const Sidebar = (): JSX.Element => {

    return <aside className="sidebar hidden dark:bg-slate-600 shadow-footer fixed min-h-screen w-60 py-8 px-4 lg:flex flex-col space-y-4">
        <NavLink to={'/'}><div className={"hover:bg-slate-200 dark:hover:bg-slate-500 py-2 p-1 rounded-md flex flex-row items-center gap-4"}> <FontAwesomeIcon icon={faHouse} />Home</div></NavLink>
        <NavLink to={'/explore'}><div className={"hover:bg-slate-200 dark:hover:bg-slate-500 py-2 p-1 rounded-md flex flex-row items-center gap-4"}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />Explore</div></NavLink>
        <NavLink to={'/playlists'}><div className={"hover:bg-slate-200 dark:hover:bg-slate-500 py-2 p-1 rounded-md flex flex-row items-center gap-4"}>
            <FontAwesomeIcon icon={faRadio} />Playlists</div></NavLink>
        <NavLink to={'/watch-later'}><div className={"hover:bg-slate-200 dark:hover:bg-slate-500 py-2 p-1 rounded-md flex flex-row items-center gap-4"}>
            <FontAwesomeIcon icon={faClock} />Watch later</div></NavLink>
        <NavLink to={'/liked-videos'}><div className={"hover:bg-slate-200 dark:hover:bg-slate-500 py-2 p-1 rounded-md flex flex-row items-center gap-4"}>
            <FontAwesomeIcon icon={faThumbsUp} />Liked videos</div></NavLink>
        <NavLink to={'/history'}><div className={"hover:bg-slate-200 dark:hover:bg-slate-500 py-2 p-1 rounded-md flex flex-row items-center gap-4"}>
            <FontAwesomeIcon icon={faClockRotateLeft} />History</div></NavLink>
    </aside>
}

export { Sidebar }