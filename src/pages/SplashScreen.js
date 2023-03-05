import React from "react";
import { Link } from "react-router-dom";

const SplashScreen = () => {
  return (
    <div>
      <section>
        <div className="px-6 py-12 h-screen pt-24 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 gap-12 flex items-center">
              <div className="mt-12 lg:mt-0">
                <h1 className="text-2xl md:text-5xl  font-bold tracking-tight mb-12">
                  Take This Survey
                  <br />
                  <span className="text-blue-600 md:text-7xl">
                    And Build Kenya
                  </span>
                  <h1>
                    <span className="text-blue-600 text-2xl">Get Started</span>{" "}
                    <span className=" text-2xl">
                      by logging in or signing up
                    </span>
                  </h1>
                </h1>

                <Link
                  className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </div>
              <div className="mb-12 lg:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2948&q=80"
                  className="w-full rounded-lg shadow-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SplashScreen;
