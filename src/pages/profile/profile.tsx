import { useAuth } from "contexts/authContext/authContext";
import { showToast } from "components/toast/toast";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "hooks/useDocumentTitle";

const Profile = (): JSX.Element => {
	const { user, setToken, setUser } = useAuth();
	const Navigate = useNavigate();

	useDocumentTitle("Profile");

	const logoutHandler = () => {
		setToken("");
		localStorage.removeItem("token");
		Navigate("/");
		setUser({ id: "", name: "", email: "" });
		localStorage.removeItem("user");
		showToast("success", "You're successfully logged out");
	};

	return (
		<div className="flex">
			<div className="mx-auto mb-8 mt-24 h-fit shadow-card w-96 rounded-md py-2 px-8 text-md">
				<p>Name: {user.name}</p>
				<p>Email: {user.email}</p>
				<button
					className="w-full text-center p-2 mt-8 bg-black hover:bg-slate-600 text-white dark:bg-slate-100 dark:text-black"
					onClick={() => logoutHandler()}
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export { Profile };
