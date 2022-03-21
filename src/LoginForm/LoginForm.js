import React from "react";

export const LoginForm = ({username, setUsername, password, setPassword, setIsAdmin}) => {
  console.log("Login form rendered"); 
  const adminCreds = {username: "admin", password: "admin"};
  const handleLogin = (event) => {
    if (username === adminCreds.username && password === adminCreds.password) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };
  const form = (
    <div className="login-form">
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        disabled={username.length === 0 || password.length === 0}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
  return form;
};
