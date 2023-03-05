import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalBar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  const options = {
    responsive: true,
    height: 500,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Satisfaction with taxes paid (1-Very Satisfied, 4-Very Dissatisfied)",
      },
    },
  };

  const labels = users.map((user) => user.username);

  const data = {
    labels,
    datasets: [
      {
        label: "Satisfaction with taxes paid",
        data: users.map((user) => user.survey.happy_with_taxes),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default VerticalBar;
