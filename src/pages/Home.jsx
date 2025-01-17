import React from "react";
import MainTemplate from "../templates/MainTemplate";
import StackLogoList from "../components/StackLogoList";

const Home = (props) => {
  const { darkModeHandler, isDarkModeActive, setIsDarkModeActive } = props;

  return (
    <>
      <MainTemplate
        darkModeHandler={darkModeHandler}
        isDarkModeActive={isDarkModeActive}
        setIsDarkModeActive={setIsDarkModeActive}
      >
        <div className="mt-10 sm:mt-10 2xl:mt-32">
          <div className='flex'>
            <div className="">
              <h1 className="text-4xl font-bold">Hello, my name is Fadel</h1>
              <h2 className="mt-2 text-base">
                <span className="border-b">A Fullstack Website Developer</span>
              </h2>
              <div className="flex flex-col w-full gap-3 mt-7 sm:mt-10 sm:w-8/12 sm:gap-5">
                <p>
                  My name is Fadela Numah Kadenza. I am currently in my final
                  semester pursuing a bachelor's degree in Informatics
                  Engineering.
                </p>
                <p>
                  I have a passion for software engineering, especially in web
                  development, which can help people solve their problems or
                  boost productivity in their day-to-day lives.
                </p>
                {/* <p>
                I have experience as an individual contributor and a "one-man
                army" in full-stack web development projects. As a "one-man
                army," I can design a web application from user stories to
                functional features that help users improve the efficiency of
                their business processes.
              </p> */}
                <p>
                  As a full-stack web developer, I usually use the following
                  technologies to build websites:
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 max-w-[500px]">
          <StackLogoList />
        </div>
      </MainTemplate>
    </>
  );
};

export default Home;
