import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import UserProfile from "./Q3UserProfile";
import "./Q3Login.css";

function Login() {
  const { login, user } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => login(name, email, password);

  return (
    <div className="q3-user container">
      <div className={`card ${user ? "hide" : ""}`}>

        {!user && (
          <div className="login-form">
            <h2>Login</h2>

            <div className="form">
              <input
                className="input"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form">
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form">
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}

        {user && <UserProfile />}

      </div>
    </div>
  );
}

export default Login;