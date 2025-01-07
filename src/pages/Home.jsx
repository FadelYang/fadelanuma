import React from "react";
import MainTemplate from "../templates/MainTemplate";
import StackLogoList from "../components/StackLogoList";

const Home = (props) => {
  const {darkModeHandler, isDarkModeActive, setIsDarkModeActive} = props;

  return (
    <>
      <MainTemplate
        darkModeHandler={darkModeHandler}
        isDarkModeActive={isDarkModeActive}
        setIsDarkModeActive={setIsDarkModeActive}
      >
        <div className="mt-10 sm:mt-20 md:mt-32">
          <div className="">
            <h1 className="text-4xl font-bold">Hello, my name is Fadel</h1>
            <h2 className="mt-2 text-base">
              <span className="border-b">A Fullstack Website Developer</span>
            </h2>
            <div className="flex flex-col w-full gap-3 mt-7 sm:mt-14 sm:w-8/12 sm:gap-5">
              <p>
                My name is Fadela Numah Kadenza. Currently, I am in my latest
                semester of pursue my bachelor degree in informatics
                engineering.
              </p>
              <p>
                I have passion in software engineering especially in web
                development that can help people solving their problem or boost
                up their productivity in their day to day life.
              </p>
              <p>
                I have experience as individual contributor and "one man army"
                in fullstack web development projects. As a "one man army", I
                can design a website application from user story to functional
                feature that help user in efficiency their business process.
              </p>
              <p>
                As fullstack website developer, I usually use these technology
                to build a website:
              </p>
              <StackLogoList />
            </div>
          </div>
        </div>
      </MainTemplate>
    </>
  );
};

export default Home;
