import React, { useState, useEffect } from "react";

const Survey = () => {
  return (
    <>
      <div className="mt-24">
        <div className="md:max-w-[50%] w-[80%] mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      Average Monthly Income
                    </label>
                    <div className="mt-1">
                      <input
                        type={"text"}
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      Average Monthly Expenses
                    </label>
                    <div className="mt-1">
                      <input
                        type={"text"}
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type={"email"}
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        type={"password"}
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="********"
                      />
                    </div>
                    <p>
                      <span className="text-sm text-gray-500">
                        Password must be at least 6 characters long
                      </span>
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      Password Confirmation
                    </label>
                    <div className="mt-1">
                      <input
                        type={"password"}
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="********"
                      />
                    </div>
                    <p>
                      <span className="text-sm text-gray-500">
                        Re-enter your password
                      </span>
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 flex justify-center px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className=" text-center rounded-md border border-transparent bg-[#9d6ef4] py-2 px-4  font-bold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sign Up Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Survey;
