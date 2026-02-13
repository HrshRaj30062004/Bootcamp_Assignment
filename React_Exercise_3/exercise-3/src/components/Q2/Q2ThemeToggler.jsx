import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./Q2ThemeToggler.css"


function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="q2-theme">
  <div className="card-toggle">
    <h2>Theme: {theme}</h2>
    <button className="card-btn" onClick={toggleTheme}>
      Toggle Theme
    </button>
  </div>
</div>
  );
}

export default ThemeToggler;