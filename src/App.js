import React, { useState, useEffect } from "react";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SplashScreen from "./pages/SplashScreen";
import Survey from "./pages/Survey";
import NavBar from "./components/NavBar";
import AdminHome from "./pages/AdminHome";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState("");

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
      .then((data) => {
        setRole(data.user.role);
        console.log(data.user.role);
      });
  }, [storedToken]);

  return (
    <div>
      <Router>
        <NavBar storedToken={storedToken} setStoredToken={setStoredToken} role={role} />
        <Routes>
          {storedToken ? (
            <>
              <Route
                path="/survey"
                element={<Survey setStoredToken={setStoredToken} />}
              />
            </>
          ) : (
            <Route path="/" element={<SplashScreen />} />
          )}

          {storedToken && role === "admin" ? (
            <Route path="/" element={<AdminHome />} />
          ) : (
            <Route path="/" element={<Home />} />
          )}

          <Route
            path="/login"
            element={<Login setStoredToken={setStoredToken} />}
          />
          <Route
            path="/signup"
            element={<SignUp setStoredToken={setStoredToken} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
