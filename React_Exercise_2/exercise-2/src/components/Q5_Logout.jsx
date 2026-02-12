function LogoutView({ onLogout }) {
  return (
    <div className="container">
      <h3>Logged in, Welcome Back!</h3>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default LogoutView;