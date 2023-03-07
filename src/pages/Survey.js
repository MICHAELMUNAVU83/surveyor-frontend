import React, { useState, useEffect } from "react";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { BsFillEmojiNeutralFill } from "react-icons/bs";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Survey = () => {
  const [happy_with_tax, setHappy_with_tax] = useState("");
  const [happy_with_county_govt, setHappy_with_county_govt] = useState("");
  const [happy_with_national_govt, setHappy_with_national_govt] = useState("");
  const [average_monthly_income, setAverage_monthly_income] = useState("");
  const [average_monthly_expenses, setAverage_monthly_expenses] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/profile ", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserId(data.user.id));
  }, []);
  const [language, setLanguage] = useState("english");
  const emojis = [
    {
      id: 1,
      icon: <BsEmojiLaughingFill size={20} />,
      text: language === "english" ? "Very Satisfied" : "Nimefurahi sana",
    },
    {
      id: 2,
      icon: <BsFillEmojiSmileFill size={20} />,
      text: language === "english" ? "Satisfied" : "Nimefurahi",
    },
    {
      id: 3,
      icon: <BsFillEmojiNeutralFill size={20} />,
      text: language === "english" ? "Neutral" : "Wastani",
    },
    {
      id: 4,
      icon: <BsFillEmojiFrownFill size={20} />,
      text: language === "english" ? "Not Satisfied" : "Sijafurahi",
    },
  ];

  const submitSurvey = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/surveys", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        average_salary_per_month: average_monthly_income,
        average_expenses_per_month: average_monthly_expenses,
        happy_with_county_gov: happy_with_county_govt,
        happy_with_nat_gov: happy_with_national_govt,
        happy_with_taxes: happy_with_tax,
        user_id: userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
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
        } else {
          toast.success("Survey Submitted Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      });
  };

  return (
    <>
      <div className="mt-16">
        <div className="md:max-w-[50%] w-[80%] mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={submitSurvey}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <label className="block text-sm font-medium te/xt-gray-700">
                    Choose The Language You Want To Take the survey in
                  </label>
                  <div className="mt-1">
                    <select
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                    >
                      <option value="">Select a Language</option>

                      <option value="english">English</option>
                      <option value="kiswahili">Kiswahili</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      {language === "english"
                        ? "What is your average monthly income?"
                        : "Je, ni kiasi gani cha kipato chako kwa mwezi?"}
                    </label>
                    <div className="mt-1">
                      <input
                        type={"number"}
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="20000"
                        value={average_monthly_income}
                        onChange={(e) =>
                          setAverage_monthly_income(e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      {language === "english"
                        ? "What is your average monthly expenses?"
                        : "Je, ni kiasi gani cha matumizi yako kwa mwezi?"}{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        type={"number"}
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="15000"
                        value={average_monthly_expenses}
                        onChange={(e) =>
                          setAverage_monthly_expenses(e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      {language === "english"
                        ? "Are you happy with the taxes you pay?"
                        : "Je, una furaha na kodi unayolipa?"}
                    </label>
                    {emojis.map((emoji) => (
                      <div
                        key={emoji.id}
                        className="flex items-center space-x-2 space-y-2"
                      >
                        <input
                          type="radio"
                          name="happy_with_taxes"
                          value={emoji.id}
                          onChange={(e) => setHappy_with_tax(e.target.value)}
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
                      {language === "english"
                        ? "Are you happy with the county government?"
                        : "Je, una furaha na serikali ya kaunti?"}
                    </label>
                    {emojis.map((emoji) => (
                      <div
                        key={emoji.id}
                        className="flex items-center space-x-2 space-y-2"
                      >
                        <input
                          type="radio"
                          name="happy_with_county_govt"
                          value={emoji.id}
                          onChange={(e) =>
                            setHappy_with_county_govt(e.target.value)
                          }
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
                      {language === "english"
                        ? "Are you happy with the national government?"
                        : "Je, una furaha na serikali ya taifa?"}
                    </label>
                    {emojis.map((emoji) => (
                      <div
                        key={emoji.id}
                        className="flex items-center space-x-2 space-y-2"
                      >
                        <input
                          type="radio"
                          name="happy_with_nat_govt"
                          value={emoji.id}
                          onChange={(e) =>
                            setHappy_with_national_govt(e.target.value)
                          }
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                        />

                        <span className="text-md flex gap-2 text-gray-500">
                          {emoji.icon} {emoji.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 flex justify-center px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className=" text-center rounded-md border border-transparent  bg-blue-700 py-2 px-4  font-bold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit Survey
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

export default Survey;
