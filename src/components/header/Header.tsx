import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { headerProps } from "./Header.type";
import { useEffect } from "react";

const Header = ({ darkMode, setDarkMode }: headerProps) => {
  const Navigate = useNavigate();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    theme === "true" && setDarkMode(true);
  }, []);

  const loginHandler = () => {
    Navigate("/login");
  };

  const themeHandler = () => {
    setDarkMode((prev: Boolean) => {
      localStorage.setItem("theme", JSON.stringify(!prev));
      return !prev;
    });
  };

  return (
    <nav className="bg-white drop-shadow-md dark:bg-slate-700 dark:text-white flex p-4 items-baseline fixed min-w-full top-0 z-3">
      <Link to={"/homepage"} className="text-3xl cursor-pointer">
        Crypto-Videos
      </Link>
      <Link to={"/explore"} className="text-xl cursor-pointer ml-4">
        Explore
      </Link>
      <div
        onClick={() => themeHandler()}
        className="text-2xl ml-auto cursor-pointer text-gray-400 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white"
      >
        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
      </div>
      <button
        onClick={() => loginHandler()}
        className="h-12 text-xl p-4 ml-8 border-2 dark:border-white border-black drop-shadow-2xl flex items-center rounded-md"
      >
        Login
      </button>
    </nav>
  );
};
export { Header };
