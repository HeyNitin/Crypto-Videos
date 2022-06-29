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
		<authContext.Provider value={{ token, setToken }}>
			{children}
		</authContext.Provider>
	);
};

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth };
