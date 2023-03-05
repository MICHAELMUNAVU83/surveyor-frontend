import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const AreaChat = () => {
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
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Satisfaction with leadership (1-Very Satisfied, 4-Very Dissatisfied)",
      },
    },
  };

  const labels = users.map((user) => user.username);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Satisfaction with County Government",
        data: users.map((user) => user.survey.happy_with_county_gov),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        fill: true,
        label: "Satisfaction with National Government",
        data: users.map((user) => user.survey.happy_with_nat_gov),

        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default AreaChat;
