import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const SignUp = ({ setStoredToken }) => {
  const navigate = useNavigate();
  const reference = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [county, setCounty] = useState("");
  const [constituency, setConstituency] = useState("");
  const [profile_picture, setProfilePicture] = useState("");
  const [counties, setCounties] = useState([]);
  const [constituencies, setConstituencies] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/counties")
      .then((response) => response.json())
      .then((data) => {
        setCounties(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/counties/${county}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.constituencies) {
          setConstituencies(data.constituencies);
        }
      });
  }, [county]);

  const uploadProfilePicture = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setProfilePicture(data.secure_url);
      });
  };

  const signUpFunctionality = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
          password_confirmation,
          email,
          county,
          constituency,
          profile_picture,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          setStoredToken(data.jwt);
          navigate("/");
        } else {
          data.error.forEach((error) => {
            toast.error(error, {
              position: "top-center",
              autoClose: 6000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
        }
      });
  };

  return (
    <>
      <div className="mt-24">
        <div className="md:max-w-[50%] w-[80%] mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={signUpFunctionality}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      Username
                    </label>
                    <div className="mt-1">
                      <input
                        type={"text"}
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="John Doe"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Profile Picture
                    </label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div className="text-sm text-gray-600" ref={reference}>
                          <label
                            for="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Add your profile picture</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              accept="image/*"
                              type="file"
                              className="sr-only"
                              onChange={(e) =>
                                uploadProfilePicture(e.target.files)
                              }
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        value={password_confirmation}
                        onChange={(e) =>
                          setPasswordConfirmation(e.target.value)
                        }
                      />
                    </div>
                    <p>
                      <span className="text-sm text-gray-500">
                        Re-enter your password
                      </span>
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      Select a County
                    </label>
                    <div className="mt-1">
                      <select
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        value={county}
                        onChange={(e) => setCounty(e.target.value)}
                      >
                        {counties.map((county) => (
                          <option value={county.name}>{county.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      Select a Constituency
                    </label>
                    <div className="mt-1">
                      <select
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        value={constituency}
                        onChange={(e) => setConstituency(e.target.value)}
                      >
                        <option value="">Select a constituency</option>
                        {constituencies.map((constituency) => (
                          <option value={constituency.name}>
                            {constituency.name}
                          </option>
                        ))}

                      </select>
                    </div>
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
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
