import { Header } from "components/header/Header";
import { Footer } from "components/footer/Footer";
import { Routes } from "components/routes";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState<Boolean>(false);
  return (
    <div className={`${darkMode && "dark"}  App`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
