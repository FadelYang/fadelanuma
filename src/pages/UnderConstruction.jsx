import MainTemplate from "../templates/MainTemplate";
import CodingCatImage from "/coding-cat-unsplash.webp";
import {Link} from "react-router-dom"

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
            <img src={CodingCatImage} alt="funny coding cat" className="h-96" />
          </div>
          This page is under construction...
          <div className="-my-3">
            <Link
              to="/"
              className="px-4 py-2 border border-black rounded dark:bg-white dark:text-black"
            >
              Home
            </Link>
          </div>
        </div>
      </MainTemplate>
    </>
  );
};

export default UnderConstruction;
