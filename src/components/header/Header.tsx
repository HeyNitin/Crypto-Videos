import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();

  const clickHandler = () => {
    Navigate("/login");
  };

  return (
    <nav className="bg-slate-200 flex p-4 items-baseline sticky">
      <Link to={"/homepage"} className="text-3xl cursor-pointer">
        Crypto-Videos
      </Link>
      <Link to={"/explore"} className="text-xl cursor-pointer ml-4">
        Explore
      </Link>
      <button
        onClick={() => clickHandler()}
        className="h-10 text-xl p-4 ml-auto bg-white flex items-center rounded-md"
      >
        Login
      </button>
    </nav>
  );
};
export { Header };
