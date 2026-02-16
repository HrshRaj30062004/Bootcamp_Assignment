import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "./components/Q2/ThemeContext";
import ThemeToggler from "./components/Q2/Q2ThemeToggler";
import LoginToggle from "./components/Q1/Q1LogginToggle";
import Login from "./components/Q3/Q3Login";
import FetchExample from "./components/Q4/Q4FetchExample";
import AuthExample from "./components/Q4/Q4AuthExample";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>

      <nav className="navbar">
        <Link to="/q1">Q1 Login Toggle</Link>
        <Link to="/q2">Q2 Theme</Link>
        <Link to="/q3">Q3 User</Link>
        <Link to="/q4-1">Q4 CustomHook-Fetch</Link>
        <Link to="/q4-2">Q4 CustomHook-Auth</Link>
      </nav>

      <div className="page-center">
        <Routes>
          <Route path="/q1" element={<LoginToggle />} />
          <Route path="/q2" element={<ThemeToggler />} />
          <Route path="/q3" element={<Login />} />
          <Route path="/q4-1" element={<FetchExample/>} />
          <Route path="/q4-2" element={<AuthExample/>} />
          <Route path="/" element={<LoginToggle />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;