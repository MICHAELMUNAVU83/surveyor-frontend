import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const NavBar = ({ storedToken, setStoredToken, role }) => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed left-0 top-0 w-full z-10  bg-blue-700 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center  text-white">
        <Link to="/">
          <h1 className="font-bold text-white mx-2 text-xl md:text-4xl ">
            Survey Kenya
          </h1>
        </Link>
        <ul className="hidden font-bold text-white sm:flex">
          <Link to="/">
            <li className="p-4">Home</li>
          </Link>
          {storedToken && role !== "admin" && (
            <Link to="/survey">
              <li className="p-4">Take Survey</li>
            </Link>
          )}
          {!storedToken && (
            <>
              <Link to="/login">
                <li className="p-4">Login</li>
              </Link>

              <Link to="/signup">
                <li className="p-4">Sign Up</li>
              </Link>
            </>
          )}

          {storedToken && (
            <button
              onClick={() => {
                localStorage.setItem("token", "");
                setStoredToken("");
                setTimeout(() => {
                  navigate("/");
                }, 1000);
              }}
            >
              Log out
            </button>
          )}
        </ul>

        {/*Mobile button /> */}
        <div className="sm:hidden block mx-2 z-10">
          {nav ? (
            <AiOutlineClose
              className="text-xl text-white"
              onClick={toggleNav}
            />
          ) : (
            <AiOutlineMenu className="text-xl text-white" onClick={toggleNav} />
          )}
        </div>
        {/*Mobile menu /> */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 right-0  left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-blue-700 text-white duration-300 ease-in-out"
              : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-blue-700 text-white duration-300 ease-in-out"
          }
        >
          <ul className="font-bold" onClick={toggleNav}>
            <Link to="/" className="p-4 text-4xl hover:text-gray-500">
              <li>Survey Kenya </li>
            </Link>
            {storedToken && role !== "admin" && (
              <Link to="/survey" className="p-4 text-4xl hover:text-gray-500">
                <li>Take Survey</li>
              </Link>
            )}
            {!storedToken && (
              <>
                <Link to="/login" className="p-4 text-4xl hover:text-gray-500">
                  <li>Login</li>
                </Link>

                <Link to="/signup" className="p-4 text-4xl hover:text-gray-500">
                  <li>Sign Up</li>
                </Link>
              </>
            )}

            {storedToken && (
              <button
                className="flex justify-center items-center"
                onClick={() => {
                  localStorage.setItem("token", "");
                  setStoredToken("");
                  setTimeout(() => {
                    navigate("/");
                  }, 1000);
                }}
              >
                <li className="mx-auto text-4xl text-center hover:text-gray-500">
                  Log out
                </li>
              </button>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
