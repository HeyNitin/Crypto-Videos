import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMoon,
	faSun,
	faBars,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { headerTypes } from "components/header/headerTypes.type";
import { useEffect } from "react";
import { useAuth } from "contexts/authContext/authContext";
import { getFirstName } from "services/getFirstNameService";

const Header = ({ darkMode, setDarkMode, setIsNavbarActive }: headerTypes) => {
	const Navigate = useNavigate();
	const { token, user } = useAuth();

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		theme === "true" && setDarkMode(true);
	}, [setDarkMode]);

	const themeHandler = () => {
		setDarkMode((prev: boolean) => {
			localStorage.setItem("theme", JSON.stringify(!prev));
			return !prev;
		});
	};

	return (
		<header className="bg-white drop-shadow-md dark:bg-slate-700 dark:text-white h-20 flex p-4 items-baseline sticky min-w-full top-0 z-30">
			<FontAwesomeIcon
				onClick={() => setIsNavbarActive((prev: boolean) => !prev)}
				className="lg:hidden pr-4 text-2xl cursor-pointer"
				icon={faBars}
			/>
			<NavLink to={"/"} className="text-3xl font-bold cursor-pointer">
				Crypto-Videos
			</NavLink>
			<NavLink
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
			<div
				onClick={() => (token ? Navigate("/profile") : Navigate("/login"))}
				className="cursor-pointer flex flex-col ml-4"
			>
				<FontAwesomeIcon
					className="text-2xl text-black hover:text-slate-700 dark:text-slate-300 dark:hover:text-white"
					icon={faUser}
				/>
				{token ? (
					<p className="text-center truncate w-24">Hello, {getFirstName(user.name)}</p>
				) : (
					<p className="text-center">Login</p>
				)}
			</div>
		</header>
	);
};
export { Header };
