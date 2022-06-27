import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { headerTypes } from "components/header/headerTypes.type";
import { useEffect } from "react";

const Header = ({ darkMode, setDarkMode }: headerTypes) => {
  const Navigate = useNavigate();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    theme === "true" && setDarkMode(true);
  }, [setDarkMode]);

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
    <nav className="bg-white drop-shadow-md dark:bg-slate-700 dark:text-white flex p-4 items-baseline fixed min-w-full top-0 z-30">
      <NavLink to={"/homepage"} className="text-3xl font-bold cursor-pointer">
        Crypto-Videos
      </NavLink>
      <NavLink to={"/explore"} className="text-xl cursor-pointer ml-8">
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
        className="h-10 text-xl p-4 ml-8 border-2 dark:border-white border-black drop-shadow-2xl flex items-center rounded-md"
      >
        Login
      </button>
    </nav >
  );
};
export { Header };
