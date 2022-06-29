// @ts-nocheck
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
	return <ToastContainer />;
};

const useToast = () => {
	const showToast = (type: string, message: string) => {
		toast[type](message, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
	};

	return { showToast };
};

export { Toast, useToast };
