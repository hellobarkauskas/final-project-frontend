// admin login komponentas su fetch, basic validacija ir token autentifikacija.

import { useState } from "react";
import HeaderLayoutComponent from "./HeaderLayoutComponent";
import '../style/ErrorMessage.css';
import '../style/LoginStyle.css';

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/admin/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        }),
    })

    .then(response => response.json())
    .then(response => {
        const data = response;
        if (data.error) {
          document.getElementById('error-message').textContent = data.error;
          return;
        } else if (data.message) {
          document.getElementById('error-message').textContent = data.message;
        } else {
          document.getElementById('error-message').textContent = '';
        };
        localStorage.setItem('token', data.token);
        // localStorage.setItem('token', JSON.stringify(data.token));
        // localStorage.setItem('adminId', JSON.stringify(data.admin_id));
        localStorage.setItem('adminId', data.admin_id);
        console.log(data.token, data.admin_id);
      })
    .catch(error => console.log(error))
    setUsername('');
    setPassword('');

  }

  return (
    <div>
      <HeaderLayoutComponent />

      <form className="login-form">
        <div className="login-container">
          <h2>Admin Login</h2>
          <input 
            type="text"
            placeholder="Username"
            name="username" 
            id="username" 
            value={username} 
            onChange={event => setUsername(event.target.value)} />
          <input 
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={password}
            onChange={event => setPassword(event.target.value)} />
          <button 
            type="submit" 
            onClick={event => login(event)}>Login
          </button>
          <a href="/register">Go to register page</a>
          <div id="error-message"></div>
        </div>
      </form>
    </div>
  );

};

export default LoginComponent;