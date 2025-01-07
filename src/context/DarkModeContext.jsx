import {createContext, useState, useContext} from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  const darkModeHandler = () => {
    setIsDarkModeActive(!isDarkModeActive);
    document.body.classList.toggle("dark");
  };

  return (
    <DarkModeContext.Provider value={{isDarkModeActive, setIsDarkModeActive, darkModeHandler}}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext)
}