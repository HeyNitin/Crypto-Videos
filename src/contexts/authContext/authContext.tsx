import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

const authContext = createContext<{
	token: string;
	setToken: Function;
	user: { id: string; name: string; email: string };
	setUser: Function;
}>({
	token: "",
	setToken: () => {},
	user: { id: "", name: "", email: "" },
	setUser: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
	const [token, setToken] = useState("");
	const [user, setUser] = useState({ id: "", name: "", email: "" });
	useEffect(() => {
		(async () => {
			const res = localStorage.getItem("token");
			res && setToken(res);
		})();
	}, []);

	useEffect(() => {
		const res = localStorage.getItem("user");
		res && setUser(JSON.parse(res));
	}, []);

	return (
		<authContext.Provider value={{ token, setToken, user, setUser }}>
			{children}
		</authContext.Provider>
	);
};

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth };
