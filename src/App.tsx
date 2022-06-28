import { Header } from "components/header/header";
import { Footer } from "components/footer/footer";
import { Routes } from "components/routes";
import { useState } from "react";
import { Toast } from "components/toast";

function App() {
  const [darkMode, setDarkMode] = useState<Boolean>(false);

  return (
    <div className={`${darkMode && "dark"}  App`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Toast />
      <Routes />
      <Footer />
    </div>
  );
}
export default App;
