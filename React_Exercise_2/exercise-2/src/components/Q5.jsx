import { useState } from "react";
import LoginView from "./Q5_Login";
import LogoutView from "./Q5_Logout";
import './Css_files/Q5.css'

function Q5Pages() {
  const [logged, setLogged] = useState(false);

  return logged
    ? <LogoutView onLogout={() => setLogged(false)} />
    : <LoginView onLogin={() => setLogged(true)} />;
}

export default Q5Pages;