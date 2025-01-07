import React from "react";
import MainTemplate from "../templates/MainTemplate";
import {Link} from "react-router-dom";

const NotFound = (props) => {
  const {darkModeHandler, isDarkModeActive, setIsDarkModeActive} = props;

  return (
    <MainTemplate
      darkModeHandler={darkModeHandler}
      isDarkModeActive={isDarkModeActive}
      setIsDarkModeActive={setIsDarkModeActive}
    >
      <div className="flex flex-col items-center justify-center h-screen gap-10 -my-28">
        <h1 className="text-9xl">404</h1>
        <h2 className="text-4xl">Page not found</h2>
        <div className="-my-2">
          <Link to="/" className="px-4 py-2 border border-black rounded dark:bg-white dark:text-black">Home</Link>
        </div>
      </div>
    </MainTemplate>
  );
};

export default NotFound;
