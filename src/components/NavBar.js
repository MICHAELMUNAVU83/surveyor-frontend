import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const NavBar = ({ storedToken, setStoredToken }) => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("black");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setColor("white");
        setTextColor("black");
      } else {
        setColor("black");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 p-2 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center  text-white">
        <Link to="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl ">
            Logo
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <Link to="/">
            <li className="p-4">Home</li>
          </Link>
          <Link to="/survey">
            <li className="p-4">Survey</li>
          </Link>
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
        <div className="sm:hidden block z-10">
          {nav ? (
            <AiOutlineClose
              className="text-4xl"
              onClick={toggleNav}
              style={{ color: `${textColor}` }}
            />
          ) : (
            <AiOutlineMenu
              className="text-4xl"
              onClick={toggleNav}
              style={{ color: `${textColor}` }}
            />
          )}
        </div>
        {/*Mobile menu /> */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 right-0  left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-black text-white duration-300 ease-in-out"
              : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-white duration-300 ease-in-out"
          }
        >
          <ul onClick={toggleNav}>
            <Link to="/" className="p-4 text-4xl hover:text-gray-500">
              <li>Home</li>
            </Link>
            <Link to="/survey" className="p-4 text-4xl hover:text-gray-500">
              <li> Survey</li>
            </Link>
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
