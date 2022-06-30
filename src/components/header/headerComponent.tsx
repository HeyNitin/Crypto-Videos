import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";
import { headerTypes } from "components/header/headerTypes.type";
import { useEffect } from "react";
import { useVideo } from "contexts/videoContext/videoContext";
import axios from "axios";
import { showToast } from "components/toast";

const Header = ({ darkMode, setDarkMode, setIsNavbarActive }: headerTypes) => {
	const Navigate = useNavigate();
	const { dispatch } = useVideo();

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		theme === "true" && setDarkMode(true);
	}, [setDarkMode]);

	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get("/api/videos");
				dispatch({ type: "Initialize", payload: res.data.videos });
			} catch (error) {
				showToast("error", "Something went wrong while trying to load videos");
			}
		})();
	}, [dispatch]);

	const loginHandler = () => {
		Navigate("/login");
	};

	const themeHandler = () => {
		setDarkMode((prev: boolean) => {
			localStorage.setItem("theme", JSON.stringify(!prev));
			return !prev;
		});
	};

	return (
		<header className="bg-white drop-shadow-md dark:bg-slate-700 dark:text-white h-20 flex p-4 items-baseline fixed min-w-full top-0 z-30">
			<FontAwesomeIcon
				onClick={() => setIsNavbarActive((prev: boolean) => !prev)}
				className="lg:hidden pr-4 text-2xl cursor-pointer"
				icon={faBars}
			/>
			<NavLink to={"/"} className="text-3xl font-bold cursor-pointer">
				Crypto-Videos
			</NavLink>
			<NavLink
				onClick={() => dispatch({ type: "All" })}
				to={"/explore"}
				className="hidden lg:block text-xl cursor-pointer ml-8"
			>
				Explore
			</NavLink>
			<div
				onClick={() => themeHandler()}
				className="text-2xl ml-auto cursor-pointer text-gray-400 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white"
			>
				<FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
			</div>
			<button
				onClick={() => loginHandler()}
				className="hidden lg:flex h-10 text-xl p-4 ml-8 border-2 dark:border-white border-black drop-shadow-2xl items-center rounded-md"
			>
				Login
			</button>
		</header>
	);
};
export { Header };
