import useAuth from "./useAuth";

export default function AuthExample() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <h2>useAuth Example</h2>

      {user ? (
        <div>
          <h3>Welcome {user.name}</h3>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login("Harsh")}>Login</button>
      )}
    </div>
  );
}