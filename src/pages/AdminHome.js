import React from "react";
import DashBoard from "../AdminDashboard/DashBoard";

const Home = () => {
  return (
    <div className="mt-20 text-center">
      <h1 className="text-4xl font-bold">
        This is the Administrator DashBoard
      </h1>
      <DashBoard />
    </div>
  );
};

export default Home;
