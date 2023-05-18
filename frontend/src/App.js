import './styles.css';
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      username: username,
      password: password
    };

    fetch("http://localhost:5000/login", {
      
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        console.log("Login successful");
      } else {

        console.log("Login failed");
      }
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <>
     <div className="container">
      <div className="logo"></div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username or email" value={username} onChange={handleUsernameChange}/>
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
        <button type="submit">Log in</button>
      </form>
      <div className="divider">
        <span>OR</span>
      </div>
      <a href="/">Forgot password?</a>
    </div>
    </>
  );
}

export default App;
