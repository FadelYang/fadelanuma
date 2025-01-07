import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {Route, Routes} from "react-router-dom";
import {useDarkMode} from "./context/DarkModeContext";

import Home from "./pages/Home";
import Project from "./pages/UnderConstruction";
import Blog from "./pages/UnderConstruction";
import ContactMe from "./pages/UnderConstruction";

function App() {
  const {isDarkModeActive, setIsDarkModeActive, darkModeHandler} =
    useDarkMode(true);

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
      <Route
        path="/blogs"
        element={
          <Project
            isDarkModeActive={isDarkModeActive}
            setIsDarkModeActive={setIsDarkModeActive}
            darkModeHandler={darkModeHandler}
          />
        }
      />
      <Route
        path="/contact-me"
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
