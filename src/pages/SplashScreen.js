import React from "react";
import { Link } from "react-router-dom";

const SplashScreen = () => {
  return (
    <div className="mt-20 text-center">
      <h1>This is the splash screen you see before login</h1>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default SplashScreen;
