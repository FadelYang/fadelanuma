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
      <div className="text-black dark:bg-slate-950 dark:text-white">
        <div className="container flex flex-col min-h-screen px-5 py-6 mx-auto md:px-10 xl:px-56">
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
              <>
                <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-30"></div>
                <div className="fixed top-0 right-0 z-30 w-3/4 h-screen px-5 py-6 text-center bg-slate-950">
                  <div className="flex flex-col h-full">
                    {/* Content Section */}
                    <div className="flex-grow">
                      <button
                        onClick={() => sideBarToggle()}
                        className="absolute text-white right-4 top-6"
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
                    {/* <footer className="text-sm text-white sm:text-base">Fadela Numah Kadenza</footer> */}
                  </div>
                </div>
              </>
            )}
            {/* Sidebar end */}

            {/* Main */}
            <div className="mt-5">{children}</div>
            {/* Main end */}
          </main>
          {/* Footer */}
          <footer className="pt-5 text-sm text-center sm:text-base">
            Fadela Numah Kadenza
          </footer>
          {/* Footer */}
        </div>
      </div>
    </>
  );
};

export default MainTemplate;
