function LoginView({ onLogin }) {
  return (
    <div className="container">
      <h3>Please Log In</h3>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default LoginView;