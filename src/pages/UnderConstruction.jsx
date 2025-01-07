import React from "react";
import MainTemplate from "../templates/MainTemplate";

const UnderConstruction = (props) => {
  const {darkModeHandler, isDarkModeActive, setIsDarkModeActive} = props;

  return (
    <>
      <MainTemplate
        darkModeHandler={darkModeHandler}
        isDarkModeActive={isDarkModeActive}
        setIsDarkModeActive={setIsDarkModeActive}
      >
        <div className="flex items-center justify-center h-screen">
          This page is under construction
        </div>
      </MainTemplate>
    </>
  );
};

export default UnderConstruction;
