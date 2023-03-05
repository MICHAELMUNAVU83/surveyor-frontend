import React, { useState, useEffect } from "react";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { BsFillEmojiNeutralFill } from "react-icons/bs";
import { BsFillEmojiFrownFill } from "react-icons/bs";

const Survey = () => {
  const [language, setLanguage] = useState("");
  useEffect(() => {
    console.log(language);
  }, [language]);
  const emojis = [
    {
      id: 1,
      icon: <BsEmojiLaughingFill size={20} />,
      text: "Very Satisfied",
    },
    {
      id: 2,
      icon: <BsFillEmojiSmileFill size={20} />,
      text: "Satisfied",
    },
    {
      id: 3,
      icon: <BsFillEmojiNeutralFill size={20} />,
      text: "Neutral",
    },
    {
      id: 4,
      icon: <BsFillEmojiFrownFill size={20} />,
      text: "Dissatisfied",
    },
  ];

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
                      Average Monthly Income (Ksh)
                    </label>
                    <div className="mt-1">
                      <input
                        type={"number"}
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="20000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      Average Monthly Expenses (Ksh)
                    </label>
                    <div className="mt-1">
                      <input
                        type={"number"}
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="15000"
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
                      Are you satisfied with the services offered by the bank?
                    </label>
                    {emojis.map((emoji) => (
                      <div
                        key={emoji.id}
                        className="flex items-center space-x-2 space-y-2"
                        onClick={() => setLanguage(emoji.text)}
                      >
                        <input
                          type="radio"
                          name="happy_with_taxes"
                          value={emoji.text}
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                        />

                        <span className="text-md flex gap-2 text-gray-500">
                          {emoji.icon} {emoji.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      Are you satisfied with the services offered by the bank?
                    </label>
                    {emojis.map((emoji) => (
                      <div
                        key={emoji.id}
                        className="flex items-center space-x-2 space-y-2"
                        onClick={() => setLanguage(emoji.text)}
                      >
                        <input
                          type="radio"
                          name="happy_with_taxes"
                          value={emoji.text}
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                        />

                        <span className="text-md flex gap-2 text-gray-500">
                          {emoji.icon} {emoji.text}
                        </span>
                      </div>
                    ))}
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
