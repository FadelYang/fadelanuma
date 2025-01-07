import {useState, useEffect} from "react";

const MainTemplate = (props) => {
  const {darkModeHandler, isDarkModeActive, setIsDarkModeActive, children} =
    props;
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSideBarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const sideBarToggle = () => {
    setIsSideBarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="dark:bg-slate-950 dark:text-white text-black">
        <div className="container mx-auto py-6 px-5 md:px-10 xl:px-56 flex flex-col min-h-screen">
          <main className="flex-grow">
            {/* Header */}
            <div className="flex justify-between">
              <div>
                <h1 className="text-base md:text-xl">Fadel</h1>
              </div>
              <div>
                <div className="flex gap-10">
                  {!isMobile && (
                    <ul className="flex gap-10">
                      <li>
                        <a href="#">Project</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Contact me</a>
                      </li>
                    </ul>
                  )}
                  <div className="flex gap-5">
                    <button onClick={() => darkModeHandler()}>
                      {isDarkModeActive ? (
                        <i className="fa-regular fa-moon"></i>
                      ) : (
                        <i className="fa-regular fa-sun"></i>
                      )}
                    </button>
                    {isMobile && (
                      <button onClick={() => sideBarToggle()}>
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Header end */}

            {/* Sidebar */}
            {isMobile && isSidebarOpen && (
              <div className="z-30 fixed top-0 left-0 w-full h-screen bg-black px-5 py-6 text-center">
                <div className="flex flex-col h-full">
                  {/* Content Section */}
                  <div className="flex-grow">
                    <button
                      onClick={() => sideBarToggle()}
                      className="absolute right-4 top-6 text-white"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                    <ul className="flex flex-col gap-7">
                      <li>
                        <a href="#" className="text-white">
                          Project
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-white">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-white">
                          Contact me
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Footer Section */}
                  <footer className="text-white text-sm sm:text-base">Fadela Numah Kadenza</footer>
                </div>
              </div>
            )}
            {/* Sidebar end */}

            {/* Main */}
            <div className='mt-5'>{children}</div>
            {/* Main end */}
          </main>
          {/* Footer */}
          <footer className="text-center pt-5 text-sm sm:text-base">Fadela Numah Kadenza</footer>
          {/* Footer */}
        </div>
      </div>
    </>
  );
};

export default MainTemplate;
