import { useState } from "react";
import "./Q1LogginToggle.css";

function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={`container-login ${isLoggedIn ? "logged-in" : "logged-out"}`}>
      
      <h3>
        {isLoggedIn ? "Welcome Back !" : "Please Log In"}
      </h3>


      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

    </div>
  );
}

export default LoginToggle;