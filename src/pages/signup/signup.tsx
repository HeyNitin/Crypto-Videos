import { useDocumentTitle } from "hooks/useDocumentTitle";
import { FormEvent, useReducer } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { showToast } from "components/toast/toast";
import { useAuth } from "contexts/authContext/authContext";
import { signupInitialValueTypes } from "pages/signup/signupTypes";
import { signupRedcuer } from "pages/signup/signupReducer";
import {
	nameValidator,
	emailValidator,
	passwordValidator,
} from "services/validatorServices";

const initialValue: signupInitialValueTypes = {
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
	error: false,
	errorMsg: "",
	tnc: false,
};

const Signup = (): JSX.Element => {
	const [state, dispatch] = useReducer(signupRedcuer, initialValue);
	const { setToken, setUser } = useAuth();
	const Navigate = useNavigate();
	const location = useLocation();

	useDocumentTitle("SignUp");

	const signupHandler = async (e: FormEvent) => {
		e.preventDefault();
		if (state.name === "" || state.password === "" || state.email === "") {
			dispatch({
				type: "Error",
				payload: "Please enter all the fields",
			});
		} else if (state.name.length < 3 || state.name.length > 26) {
			dispatch({
				type: "Error",
				payload:
					"Name must contain atleast three letters and a maximum of 25 letters",
			});
		} else if (!nameValidator(state.name)) {
			dispatch({
				type: "Error",
				payload:
					"Name must contain both firstname and surname. Middle name is optional and these must be seperated by one and only one space",
			});
		} else if (!emailValidator(state.email)) {
			dispatch({
				type: "Error",
				payload: "Please enter a correct Email address",
			});
		} else if (state.password.length < 6 || state.password.length > 15) {
			dispatch({
				type: "Error",
				payload:
					"Password must have atleast 6 letters and a maximum of 15 letters",
			});
		} else if (!passwordValidator(state.password)) {
			dispatch({
				type: "Error",
				payload:
					"Password must containe atleast 1 small character, 1 capital character, 1 number and 1 special character from !@#$%^&*",
			});
		} else if (state.password !== state.confirmPassword) {
			dispatch({ type: "Error", payload: "Passwords don't match" });
		} else if (!state.tnc) {
			dispatch({ type: "Error", payload: "Please tick the checkbox" });
		} else {
			try {
				const res = await axios.post("/api/auth/signup", {
					email: state.email.toLowerCase(),
					password: state.password,
					name: state.name,
				});
				switch (res.status) {
					case 201:
						setToken(res.data.encodedToken);
						setUser(res.data.createdUser);
						showToast("success", "You're successfully Signed Up");
						break;

					case 422:
						showToast("info", "Email already exists");
						dispatch({
							type: "Error",
							payload: "Email already exists in database",
						});
						break;

					default:
						break;
				}
			} catch (error) {
				showToast("error", "Something went wrong while tring to sign you up");
			}
		}
	};

	return (
		<div className="flex">
			<div className="mx-auto mb-8 mt-24 h-fit shadow-card w-96 rounded-md py-2 px-8 text-md">
				<p className="m-4 text-center text-2xl">Signup</p>
				<form onSubmit={(e) => signupHandler(e)}>
					<div>
						<label htmlFor="name">Enter your Name</label>
						<input
							className="mb-4 border border-black rounded w-full dark:text-black focus:outline-none focus:bg-white"
							onChange={(e) =>
								dispatch({ type: "Name", payload: e.target.value })
							}
							value={state.name}
							type="text"
							id="name"
							placeholder="Enter your Name"
						/>
					</div>
					<div>
						<label htmlFor="email-address">Email address</label>
						<input
							className="mb-4 border border-black rounded w-full dark:text-black focus:outline-none focus:bg-white"
							onChange={(e) =>
								dispatch({ type: "E-mail", payload: e.target.value })
							}
							value={state.email}
							type="text"
							id="email-address"
							placeholder="john@cena.com"
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							className="mb-4 border border-black rounded w-full dark:text-black focus:outline-none focus:bg-white"
							onChange={(e) =>
								dispatch({ type: "Password", payload: e.target.value })
							}
							value={state.password}
							id="password"
							type="password"
							placeholder="********"
						/>
					</div>
					<div>
						<label htmlFor="confirm-password">Confirm Password</label>
						<input
							className="mb-4 border border-black rounded w-full dark:text-black focus:outline-none focus:bg-white"
							onChange={(e) =>
								dispatch({ type: "ConfirmPassword", payload: e.target.value })
							}
							value={state.confirmPassword}
							id="confirm-password"
							type="password"
							placeholder="********"
						/>
					</div>
					<div>
						<input
							className="mr-2 w-4"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								dispatch({ type: "Tnc", payload: e.target.checked })
							}
							checked={state.tnc}
							id="tnc"
							type="checkbox"
						/>
						<label htmlFor="tnc">I accept all terms & conditions</label>
					</div>
					<div>
						<button className="w-full text-center p-2 mt-8 bg-black hover:bg-slate-600 text-white dark:bg-slate-100 dark:text-black">
							Sign-Up
						</button>
						<p
							className="cursor-pointer flex w-full justify-center mt-4 mb-2"
							onClick={() =>
								Navigate("/login", {
									state: location?.state,
								})
							}
						>
							Already have an account? Login
						</p>
						{state.error && (
							<div className="text-red-500 flex justify-center items-center">
								{state.errorMsg}
							</div>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export { Signup };
