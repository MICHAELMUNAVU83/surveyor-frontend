import React, { useState, useEffect } from "react";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SplashScreen from "./pages/SplashScreen";
import Survey from "./pages/Survey";
import NavBar from "./components/NavBar";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    console.log(storedToken);
  }, [storedToken]);

  return (
    <div>
      <Router>
        <NavBar storedToken={storedToken} setStoredToken={setStoredToken} />
        <Routes>
          {storedToken ? (
            <>
              <Route path="/" element={<Home />} />
              <Route
                path="/survey"
                element={<Survey setStoredToken={setStoredToken} />}
              />
            </>
          ) : (
            <Route path="/" element={<SplashScreen />} />
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
