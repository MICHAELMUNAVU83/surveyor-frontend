import React, { useEffect, useState } from "react";
import DashBoard from "../AdminDashboard/DashBoard";
function Home() {
  const [name, setName] = useState("");
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
      .then((data) => setName(data.user.username));
  }, []);

  return (
    <div className="mt-20 text-center">
      <h1 className="text-4xl font-bold">Welcome {name}</h1>
      <DashBoard />
    </div>
  );
}

export default Home;
