import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/Home"

function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(true);

  const darkModeHandler = () => {
    setIsDarkModeActive(!isDarkModeActive);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <Home
        isDarkModeActive={isDarkModeActive}
        setIsDarkModeActive={setIsDarkModeActive}
        darkModeHandler={darkModeHandler}
      />
    </>
  );
}

export default App;
