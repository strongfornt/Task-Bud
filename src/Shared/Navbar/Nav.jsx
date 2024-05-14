import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom/dist";

import profile from "./../../assets/deFaultProfile1.png";
import { useLocation } from "react-router-dom";
import { calculateScrollbarWidth } from "./ScrollBar";

import OutsideClickHandler from "react-outside-click-handler";
import { SiReactrouter } from "react-icons/si";

import { IoMdArrowDropup } from "react-icons/io";

import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import useAuth from "../../useHooks/useAuth";

export default function NavBar() {
  const [scrollY, setScrollY] = useState(0);
  

  const { user, loading, logOut, theme, setTheme, menu, setMenu,dropdown,setDropdown } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logOut().then(() => {
      toast("See you soon!");
    });
  };

  useEffect(() => {
    if (menu) {
      const scrollbarWidth = calculateScrollbarWidth();

      document.body.style.paddingRight = `${scrollbarWidth}px`;

      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "0";

      document.body.style.overflow = "auto";
    }
  }, [menu]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("halloween");
    } else {
      setTheme("light");
    }
  };

  const responsiveNavLinks = (
    <>
      <NavLink
        onClick={() => setMenu(false)}
        to="/"
        className={({ isActive }) =>
          isActive
            ? ` text-teal-400 w-fit text-sm font-medium  `
            : `text-sm w-fit  font-medium hover:text-teal-400 duration-300 `
        }
      >
        <p className="">Home</p>
      </NavLink>

      <NavLink
        onClick={() => setMenu(false)}
        to="/assignments"
        className={({ isActive }) =>
          isActive
            ? ` text-teal-400 w-fit text-sm font-medium  `
            : `text-sm w-fit  font-medium hover:text-teal-400 duration-300 `
        }
      >
        <p className="">Assignments</p>
      </NavLink>
      <NavLink
        onClick={() => setMenu(false)}
        to="/createAssignment"
        className={({ isActive }) =>
          isActive
            ? ` text-teal-400 w-fit text-sm font-medium  `
            : `text-sm w-fit  font-medium hover:text-teal-400 duration-300 `
        }
      >
        <p className="">Create Assignment</p>
      </NavLink>
     {
      loading ?  <NavLink
      onClick={() => setMenu(false)}
      to="/mySubmitted"
      className={({ isActive }) =>
        isActive
          ? ` text-teal-400 w-fit text-sm font-medium  `
          : `text-sm w-fit  font-medium hover:text-teal-400 duration-300 `
      }
    >
      <p className="">My Submitted</p>
    </NavLink> : user &&  <NavLink
        onClick={() => setMenu(false)}
        to="/mySubmitted"
        className={({ isActive }) =>
          isActive
            ? ` text-teal-400 w-fit text-sm font-medium  `
            : `text-sm w-fit  font-medium hover:text-teal-400 duration-300 `
        }
      >
        <p className="">My Submitted</p>
      </NavLink>
     }
      {loading ?<NavLink
          onClick={() => setMenu(false)}
          to="/pendingAssignment"
          className={({ isActive }) =>
            isActive
              ? ` text-teal-400 w-fit text-sm font-medium  `
              : `text-sm w-fit  font-medium hover:text-teal-400 duration-300 `
          }
        >
          <p className="">Pending Assignment</p>
        </NavLink> : user && (
        <NavLink
          onClick={() => setMenu(false)}
          to="/pendingAssignment"
          className={({ isActive }) =>
            isActive
              ? ` text-teal-400 w-fit text-sm font-medium  `
              : `text-sm w-fit  font-medium hover:text-teal-400 duration-300 `
          }
        >
          <p className="">Pending Assignment</p>
        </NavLink>
      )}
     {
      loading ?  <NavLink
      onClick={() => setMenu(false)}
      to="/updateProfile"
      className={({ isActive }) =>
        isActive
          ? ` text-teal-400 w-fit text-sm font-medium  `
          : `text-sm w-fit  font-medium hover:text-teal-400 duration-300 `
      }
    >
      <p className="">Update Profile</p>
    </NavLink> : user &&  <NavLink
        onClick={() => setMenu(false)}
        to="/updateProfile"
        className={({ isActive }) =>
          isActive
            ? ` text-teal-400 w-fit text-sm font-medium  `
            : `text-sm w-fit  font-medium hover:text-teal-400 duration-300 `
        }
      >
        <p className="">Update Profile</p>
      </NavLink>
     }
    </>
  );

  const navLinks = (
    <>
      <NavLink
        onClick={() => {
          setMenu(false);
        }}
        to="/"
        className={({ isActive }) =>
          isActive
            ? ` text-teal-400 w-fit  text-sm font-medium  `
            : `text-sm w-fit  font-medium  hover:text-teal-400 duration-300  `
        }
      >
        <p className="">Home</p>
      </NavLink>

      <NavLink
        onClick={() => {
          setMenu(false);
        }}
        to="/assignments"
        className={({ isActive }) =>
          isActive
            ? ` text-teal-400 w-fit text-sm font-medium  `
            : `text-sm w-fit ${
                location.pathname === "/" && scrollY < 199 && "text-white"
              }  font-medium hover:text-teal-400 duration-300 `
        }
      >
        <p className="">Assignments</p>
      </NavLink>
      <NavLink
        onClick={() => {
          setMenu(false);
        }}
        to="/createAssignment"
        className={({ isActive }) =>
          isActive
            ? ` text-teal-400 w-fit text-sm font-medium  `
            : `text-sm w-fit  ${
                location.pathname === "/" && scrollY < 199 && "text-white"
              } font-medium hover:text-teal-400 duration-300 `
        }
      >
        <p className="">Create Assignment</p>
      </NavLink>
   
    {
      loading?   <NavLink
      onClick={() => {
        setMenu(false);
      }}
      to="/pendingAssignment"
      className={({ isActive }) =>
        isActive
          ? ` text-teal-400 w-fit text-sm font-medium  `
          : `text-sm w-fit ${
              location.pathname === "/" && scrollY < 199 && "text-white"
            }  font-medium hover:text-teal-400 duration-300 `
      }
    >
      <p className="">Pending Assignment</p>
    </NavLink> : user&&  <NavLink
        onClick={() => {
          setMenu(false);
        }}
        to="/pendingAssignment"
        className={({ isActive }) =>
          isActive
            ? ` text-teal-400 w-fit text-sm font-medium  `
            : `text-sm w-fit ${
                location.pathname === "/" && scrollY < 199 && "text-white"
              }  font-medium hover:text-teal-400 duration-300 `
        }
      >
        <p className="">Pending Assignment</p>
      </NavLink>
    }
    </>
  );

  return (
    <>
      <Toaster />
      <header className="relative  z-30 ">
        <div
          className={`navbar px-2 py-0  md:px-4 lg:8  ${
            scrollY < 199
              ? "top-[0.1px] bg-transparent shadow-sm"
              : scrollY > 199
              ? "   flex"
              : "hidden"
          } ${
            scrollY > 220
              ? `fixed ${
                  theme === "light" ? "bg-white" : "bg-[#2e3034]"
                } z-30 top-0 transition-all duration-500 flex shadow-sm `
              : "absolute -top-32 "
          }`}
        >
          <div className="navbar-start w-fit ">
            <a className=" text-2xl font-bold  text-teal-400 ">
              <span className="text-3xl font-bold"> Task</span>
              <span
                className={`font-bold ${
                  theme === "light"
                    ? location.pathname === "/"
                      ? scrollY < 199
                        ? "text-white"
                        : "text-[#4b5664]"
                      : "text-[#4b5664]"
                    : "text-white"
                }`}
              >
                Bud
              </span>
            </a>
          </div>
          {/* <div className="navbar-end hidden lg:flex"></div> */}
          <div className="navbar-end flex-1  ">
            <label className="cursor-pointer  mr-4  md:hidden grid place-items-center">
              <input
                onChange={handleTheme}
                type="checkbox"
                value="halloween"
                checked={theme === "light" ? false : true}
                className="toggle theme-controller bg-base-content row-start-1 h-5  col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>

            {/* responsive menu start */}
            <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
              <div className="items-center flex   md:hidden">
                <label className=" swap swap-rotate  border-none  ">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    onChange={() => {
                      setMenu(!menu);
                    }}
                    checked={menu ? true : false}
                  />

                  {/* hamburger icon */}

                  <svg
                    className={`swap-off fill-current z-30 ${
                      theme === "light"
                        ? location.pathname === "/"
                          ? scrollY < 199
                            ? "text-white"
                            : "text-[#4b5664]"
                          : "text-[#4b5664]"
                        : "text-white"
                    }  `}
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>

                  {/* close icon */}
                  <svg
                    className={`swap-on fill-current z-30 ${
                      theme === "light"
                        ? location.pathname === "/"
                          ? scrollY < 199
                            ? "text-white"
                            : "text-[#4b5664]"
                          : "text-[#4b5664]"
                        : "text-white"
                    } `}
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 512 512"
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                </label>
              </div>

              <ul
                tabIndex={0}
                className={`menu absolute mr-6  -left-64 -translate-y-[3.6rem] min-w-60 menu-sm md:hidden text-xl  dropdown-content border-opacity-60 
                   mt-3 z-[10] shadow-lg  bg-base-100  min-h-screen  rounded-r-xl   gap-2    ${
                     menu && " -left-[0.1rem]  duration-300 transition-all  "
                   }`}
              >
                {user && (
                  <li className="flex  items-center    ">
                    <div className="avatar">
                      <div className="w-10 rounded-full ring-1 ring-[#4b5664] ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL || profile} />
                      </div>
                    </div>
                    <div>
                      <h2
                        className={`text-lg font-bold ${
                          theme === "light" ? "text-[#191515]" : "text-white"
                        }  `}
                      >
                        {user?.displayName || "Anonymous"}
                      </h2>
                    </div>
                  </li>
                )}

                <li
                  className={` rounded-md bg-gray-800 text-white  `}
                  // ${user ? "" : "mt-16"}
                >
                  <p className={`flex items-center p-2 space-x-3 rounded-md  `}>
                    <SiReactrouter
                      className={`text-xl  ${
                        location.pathname == "/" ? "text-red-800" : "text-white"
                      } `}
                    />
                    <span>Route</span>
                  </p>
                </li>
                {responsiveNavLinks}

                <div
                  className={` ${
                    theme === "light" ? "bg-gray-800" : "bg-white"
                  } w-full inline-flex h-[1px] my-2`}
                ></div>
                <li className="">
                  {user ? (
                    <button
                      onClick={() => {
                        handleLogout();
                        setMenu(false);
                      }}
                      className={`flex px-2 py-1 w-fit  relative rounded group overflow-hidden font-medium border-b  
                    ${
                      theme === "light"
                        ? "border-gray-800 text-gray-800"
                        : "border-gray-50 text-white"
                    }
              `}
                    >
                      <span
                        className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 ${
                          theme === "light" ? "bg-gray-800" : "bg-gray-50"
                        }  group-hover:h-full opacity-90`}
                      ></span>
                      <span
                        className={`relative ${
                          theme === "light"
                            ? "group-hover:text-white"
                            : "group-hover:text-black"
                        } `}
                      >
                        Logout
                      </span>
                    </button>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={() => setMenu(false)}
                        className={`flex px-6  py-1 w-fit mb-4 relative rounded group overflow-hidden font-medium border-b  
                      ${
                        theme === "light"
                          ? "border-gray-800 text-gray-800"
                          : "border-gray-50 text-white"
                      }
              
              `}
                      >
                        <span
                          className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0  ${
                            theme === "light" ? "bg-gray-800" : "bg-gray-50"
                          } group-hover:h-full opacity-90`}
                        ></span>
                        <span
                          className={`relative ${
                            theme === "light"
                              ? "group-hover:text-white"
                              : "group-hover:text-black"
                          }  `}
                        >
                          Login
                        </span>
                      </Link>
                      <Link
                        to="/register"
                        onClick={() => setMenu(false)}
                        className={`flex px-4 py-1 w-fit  relative rounded group overflow-hidden font-medium border-b  
                      ${
                        theme === "light"
                          ? "border-gray-800 text-gray-800"
                          : "border-gray-50 text-white"
                      }
              
              `}
                      >
                        <span
                          className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0  ${
                            theme === "light" ? "bg-gray-800" : "bg-gray-50"
                          } group-hover:h-full opacity-90`}
                        ></span>
                        <span
                          className={`relative ${
                            theme === "light"
                              ? "group-hover:text-white"
                              : "group-hover:text-black"
                          }  `}
                        >
                          Register
                        </span>
                      </Link>
                    </>
                  )}
                </li>
              </ul>
            </OutsideClickHandler>
            {/* responsive menu end    */}

            <ul className="menu menu-horizontal px-1 py-0 h-16 md:gap-8 hidden  md:flex items-center ">
              {navLinks}

              {loading ? (
                <div className=" md:flex hidden  items-center gap-1">
                  <div
                    className=" tooltip-left md:tooltip-bottom tooltip  flex items-center "
                    data-tip={user?.displayName || "Anonymous"}
                  >
                    <div className="avatar">
                      <div className="w-8 rounded-full tooltip  ">
                        <img src={user?.photoURL || profile} />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                user && (
                  <div
                    className={`h-full  relative group  flex items-center justify-center `}
                  >
                    <OutsideClickHandler onOutsideClick={() => setDropdown(false)} >
                    <div className="relative inline-block ">
                   <button 
                    onClick={()=>setDropdown(!dropdown)}
                   >
                      <div className=" md:flex hidden  items-center gap-1">
                        <div className="avatar">
                          <div className="w-8 rounded-full tooltip  ">
                            <img src={user?.photoURL || profile} />
                          </div>
                        </div>
                      </div>
                    </button>

        {/* <!-- Dropdown menu --> */}
        {dropdown && <div>
        <IoMdArrowDropup className="text-gray-900 z-30 absolute -translate-y-[10.5px] translate-x-[2px] text-4xl  " />
        <div
       
          className="absolute right-0  z-20 w-48 py-2 mt-3 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
        >
          <a
            
            className="flex items-center  px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                fill="currentColor"
              ></path>
              <path
                d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                fill="currentColor"
              ></path>
            </svg>

            <span className="mx-1">{user?.displayName || "Anonymous"}</span>
          </a>

          <hr className="border-gray-200 dark:border-gray-700 " />

          <Link
            to="/updateProfile"
            onClick={()=>setDropdown(false)} 
            className="flex cursor-pointer items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 22C15.8082 21.9947 14.0267 20.2306 14 18.039V16H9.99996V18.02C9.98892 20.2265 8.19321 22.0073 5.98669 22C3.78017 21.9926 1.99635 20.1999 2.00001 17.9934C2.00367 15.7868 3.79343 14 5.99996 14H7.99996V9.99999H5.99996C3.79343 9.99997 2.00367 8.21315 2.00001 6.00663C1.99635 3.8001 3.78017 2.00736 5.98669 1.99999C8.19321 1.99267 9.98892 3.77349 9.99996 5.97999V7.99999H14V5.99999C14 3.79085 15.7908 1.99999 18 1.99999C20.2091 1.99999 22 3.79085 22 5.99999C22 8.20913 20.2091 9.99999 18 9.99999H16V14H18C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22ZM16 16V18C16 19.1046 16.8954 20 18 20C19.1045 20 20 19.1046 20 18C20 16.8954 19.1045 16 18 16H16ZM5.99996 16C4.89539 16 3.99996 16.8954 3.99996 18C3.99996 19.1046 4.89539 20 5.99996 20C6.53211 20.0057 7.04412 19.7968 7.42043 19.4205C7.79674 19.0442 8.00563 18.5321 7.99996 18V16H5.99996ZM9.99996 9.99999V14H14V9.99999H9.99996ZM18 3.99999C17.4678 3.99431 16.9558 4.2032 16.5795 4.57952C16.2032 4.95583 15.9943 5.46784 16 5.99999V7.99999H18C18.5321 8.00567 19.0441 7.79678 19.4204 7.42047C19.7967 7.04416 20.0056 6.53215 20 5.99999C20.0056 5.46784 19.7967 4.95583 19.4204 4.57952C19.0441 4.2032 18.5321 3.99431 18 3.99999ZM5.99996 3.99999C5.4678 3.99431 4.95579 4.2032 4.57948 4.57952C4.20317 4.95583 3.99428 5.46784 3.99996 5.99999C3.99428 6.53215 4.20317 7.04416 4.57948 7.42047C4.95579 7.79678 5.4678 8.00567 5.99996 7.99999H7.99996V5.99999C8.00563 5.46784 7.79674 4.95583 7.42043 4.57952C7.04412 4.2032 6.53211 3.99431 5.99996 3.99999Z"
                fill="currentColor"
              ></path>
            </svg>

            <span className="mx-1">Update profile</span>
          </Link>
          <Link to="/mySubmitted" onClick={()=>setDropdown(false)} className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 19H3C1.89543 19 1 18.1046 1 17V16H3V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V16H23V17C23 18.1046 22.1046 19 21 19ZM5 7V16H19V7H5Z" fill="currentColor"></path>
            </svg>

            <span className="mx-1">
                My Submitted
            </span>
        </Link>
          <hr className="border-gray-200 dark:border-gray-700 " />

          <a
            onClick={()=>{
              handleLogout()
              setDropdown(false)
            }}
            className="flex cursor-pointer items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                fill="currentColor"
              ></path>
            </svg>

            <span  className="mx-1">Sign Out</span>
          </a>
        </div>
        </div>}
      </div>
                    </OutsideClickHandler>
                  </div>
                )
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
