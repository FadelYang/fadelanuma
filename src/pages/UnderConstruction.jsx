import React from "react";
import MainTemplate from "../templates/MainTemplate";
import CodingCatImage from "/coding-cat-unsplash.webp"

const UnderConstruction = (props) => {
  const {darkModeHandler, isDarkModeActive, setIsDarkModeActive} = props;

  return (
    <>
      <MainTemplate
        darkModeHandler={darkModeHandler}
        isDarkModeActive={isDarkModeActive}
        setIsDarkModeActive={setIsDarkModeActive}
      >
        <div className="flex flex-col items-center justify-center h-screen gap-10 -my-28">
          <div>
            <img src={CodingCatImage} alt="funny coding cat" className='h-96'/>
          </div>
          This page is under construction
        </div>
      </MainTemplate>
    </>
  );
};

export default UnderConstruction;
