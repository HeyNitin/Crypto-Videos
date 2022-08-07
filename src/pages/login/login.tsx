import axios from "axios";
import { FormEvent, useReducer, useState } from "react";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import { showToast } from "components/toast/toast";
import { useAuth } from "contexts/authContext/authContext";
import { useLocation, useNavigate } from "react-router-dom";
import { emailValidator } from "services/validatorServices";
import { loginReducer } from "pages/login/loginReducer";
import { loginInitialValueTypes } from "pages/login/loginTypes.type";

const initialValue: loginInitialValueTypes = {
	email: "",
	password: "",
	errorMsg: "",
	error: false,
	rememberMe: false,
	defaultCredentials: false,
};

const Login = (): JSX.Element => {
	const [state, dispatch] = useReducer(loginReducer, initialValue);
	const { setToken, setUser } = useAuth();
	const [isPasswordVisible, setIsPasswordVisible] = useState<Boolean>(false)
	const Navigate = useNavigate();
	const location = useLocation();

	const loginHandler = async (e: FormEvent) => {
		e.preventDefault();
		if (state.email !== "" && state.password !== "") {
			if (emailValidator(state.email)) {
				try {
					const { data } = await axios.post("/api/auth/login", {
						email: state.email.toLowerCase(),
						password: state.password,
					});
					setToken(data.encodedToken);
					setUser(data.foundUser);
					switch (state.rememberMe) {
						case true:
							localStorage.setItem("token", JSON.stringify(data.encodedToken));
							localStorage.setItem("user", JSON.stringify(data.foundUser));
							break;

						default:
							break;
					}

					showToast("success", "You're successfully logged in");
				} catch (error) {
					dispatch({ type: "Error", payload: "Wrong Credentials" });
				}
			} else {
				dispatch({
					type: "Error",
					payload: "Please enter correct Email Address",
				});
			}
		} else {
			dispatch({
				type: "Error",
				payload: "Please enter both Email and Password",
			});
		}
	};

	useDocumentTitle("Login");

	return (
		<div className="flex">
			<div className="mx-auto mb-8 mt-24 h-fit shadow-card w-96 rounded-md py-2 px-8 text-md">
				<p className="m-4 text-center text-2xl">Login</p>
				<form
					onSubmit={(e) => {
						loginHandler(e);
					}}
				>
					<div>
						<label htmlFor="email-address">Email address</label>
						<div className="border border-black mb-4 rounded h-6">
							<input
								className=" w-full outline-none bg-transparent px-1"
								onChange={(e) =>
									dispatch({ type: "E-mail", payload: e.target.value })
								}
								value={state.email}
								type="email"
								id="email-address"
								placeholder="Nitin@Cryptovideos.com"
							/>
						</div>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<div className="border border-black flex gap-2 items-center mb-4 rounded h-6">
							<input
								className="w-full outline-none bg-transparent px-1"
								onChange={(e) =>
									dispatch({ type: "Password", payload: e.target.value })
								}
								value={state.password}
								id="password"
								type={isPasswordVisible ? "text" : "password"}
								placeholder="********"
							/>
							<span onClick={() => setIsPasswordVisible(prev => !prev)} className="material-icons-outlined cursor-pointer">
								{isPasswordVisible ? "visibility" : "visibility_off"}
							</span>
						</div>
					</div>
					<div className="flex">
						<input
							className="mr-2 w-4"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								dispatch({ type: "RememberMe", payload: e.target.checked })
							}
							checked={state.rememberMe}
							id="remember-me"
							type="checkbox"
						/>
						<label className="mr-auto" htmlFor="remember-me">
							Remember me
						</label>
					</div>
					<div className="flex">
						<input
							className="mr-2 w-4"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								dispatch({
									type: "DefaultCredentials",
									payload: e.target.checked,
								})
							}
							checked={state.defaultCredentials}
							id="defaultCredentials"
							type="checkbox"
						/>
						<label className="mr-auto" htmlFor="defaultCredentials">
							Default Credentials
						</label>
					</div>
					<div>
						<button className="w-full text-center p-2 mt-8 bg-black hover:bg-slate-600 text-white dark:bg-slate-100 dark:text-black">
							Login
						</button>
						<p
							className="cursor-pointer flex w-full justify-center mt-4 mb-2"
							onClick={() =>
								Navigate("/signup", {
									state: location?.state,
								})
							}
						>
							New User? Create New Account
						</p>
					</div>
					{state.error && (
						<div className="text-red-500 flex justify-center items-center">
							{state.errorMsg}
						</div>
					)}
				</form>
			</div >
		</div >
	);
};

export { Login };
