import { useContext } from "react";
import { UserContext } from "./UserContext";
import './Q3Login.css'

function UserProfile() {
  const { user, logout } = useContext(UserContext);

  if (!user) return null;

  return (
    <div className="box">
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button className="btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default UserProfile;