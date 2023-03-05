import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [female_survey, setFemaleSurvey] = useState(0);
  const [male_survey, setMaleSurvey] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/male_surveys", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((data) => {
        setMaleSurvey(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/female_surveys", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((data) => {
        setFemaleSurvey(data);
      });
  }, []);

  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Number of surveys",
        data: [male_survey, female_survey],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Number of Surveys taken by male and female users",
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
