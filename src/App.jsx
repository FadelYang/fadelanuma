import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/UnderConstruction";
import {useDarkMode} from "./context/DarkModeContext"

function App() {
  const {isDarkModeActive, setIsDarkModeActive, darkModeHandler} = useDarkMode(true);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            isDarkModeActive={isDarkModeActive}
            setIsDarkModeActive={setIsDarkModeActive}
            darkModeHandler={darkModeHandler}
          />
        }
      />
      <Route
        path="/projects"
        element={
          <Project
            isDarkModeActive={isDarkModeActive}
            setIsDarkModeActive={setIsDarkModeActive}
            darkModeHandler={darkModeHandler}
          />
        }
      />
    </Routes>
  );
}

export default App;
