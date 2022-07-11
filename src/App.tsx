import { Header } from "components/header/headerComponent";
import { Routes } from "components/routes/routes";
import { useRef, useState, useEffect } from "react";
import { Toast } from "components/toast/toast";
import { Navbar } from "components/navbar/navbar";

function App() {
	const [darkMode, setDarkMode] = useState<Boolean>(false);
	const [isNavbarActive, setIsNavbarActive] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				setIsNavbarActive(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [modalRef]);

	return (
		<div className={`${darkMode && "dark"}  App`}>
			<Header
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				setIsNavbarActive={setIsNavbarActive}
			/>
			<div ref={modalRef}>
				<Navbar isNavbarActive={isNavbarActive} />
			</div>
			<Toast />
			<Routes />
		</div>
	);
}
export default App;
