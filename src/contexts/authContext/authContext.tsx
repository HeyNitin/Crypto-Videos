import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

const AuthContext = createContext<{
	token: string;
	setToken: Function;
}>({ token: "", setToken: () => {} });

const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
	const [token, setToken] = useState("");
	useEffect(() => {
		(async () => {
			const res = localStorage.getItem("token");
			res && setToken(res);
		})();
	}, []);

	return (
		<AuthContext.Provider value={{ token, setToken }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
