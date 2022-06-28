import { Header } from "components/header/headerComponent";
import { Routes } from "components/routes";
import { useState } from "react";
import { Toast } from "components/toast";
import { Navbar } from "components/navbar"

function App() {
  const [darkMode, setDarkMode] = useState<Boolean>(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false)

  return (
    <div className={`${darkMode && "dark"}  App`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} setIsNavbarActive={setIsNavbarActive} />
      <Navbar isNavbarActive={isNavbarActive} />
      <Toast />
      <Routes />
    </div>
  );
}
export default App;
