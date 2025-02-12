import MainTemplate from "../templates/MainTemplate";
import CodingCatImage from "/coding-cat-unsplash.webp";
import { Link } from "react-router-dom";

const UnderConstruction = (props) => {
  const { darkModeHandler, isDarkModeActive, setIsDarkModeActive } = props;

  return (
    <>
      <MainTemplate
        darkModeHandler={darkModeHandler}
        isDarkModeActive={isDarkModeActive}
        setIsDarkModeActive={setIsDarkModeActive}
      >
        <div className="flex flex-col items-center justify-center h-screen gap-10 -my-20">
          <div>
            <img
              src={CodingCatImage}
              alt="funny coding cat"
              className="xl:h-64 2xl:h-72"
            />
          </div>
          <p className="text-center">
            This page is under construction
            {window.location.pathname === "/contact-me" && (
              <>
                <p>You can contact me via LinkedIn :)</p>
              </>
            )}
            {window.location.pathname === "/projects" && (
              <>
                <p className="max-w-[500px]">
                  Please visit my GitHub to check out my latest projects, or my
                  portfolio decks I made in Canva :)
                </p>
              </>
            )}
          </p>
          <div className="-my-3 flex gap-2">
            <Link
              to="/"
              className="px-4 py-2 border border-black rounded dark:bg-white dark:text-black"
            >
              Home
            </Link>
            {window.location.pathname === "/projects" && (
              <>
                <a
                  href="https://github.com/FadelYang/"
                  target="_blank"
                  className="px-4 py-2 border rounded border-white rouded bg-black text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://www.canva.com/design/DAF1B7OWYUQ/_Ta5BzrcpeAOUYMoVlSBBg/edit?utm_content=DAF1B7OWYUQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                  target="_blank"
                  className="px-4 py-2 border rounded border-black dark:border-white rouded  bg-[#20C4CB] text-white"
                >
                  Canva
                </a>
              </>
            )}
            {window.location.pathname === "/contact-me" && (
              <>
                <a
                  href="https://www.linkedin.com/in/fadela-numah-kadenza-0305751ab/"
                  target="_blank"
                  className="px-4 py-2 border rounded border-black dark:border-white rouded  bg-[#0072B1] text-white"
                >
                  LinkedIn
                </a>
              </>
            )}
          </div>
        </div>
      </MainTemplate>
    </>
  );
};

export default UnderConstruction;
