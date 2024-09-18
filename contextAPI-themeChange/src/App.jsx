import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
// import { ThemeProvider } from "./contexts/theme";
import { ThemeContext } from "./contexts/theme";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkMode = () => {
    setThemeMode("dark");
  };
  const lightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, darkMode, lightMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
