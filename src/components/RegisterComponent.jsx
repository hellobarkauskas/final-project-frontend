import { useState } from "react";
import HeaderLayoutComponent from "./HeaderLayoutComponent";
import '../style/ErrorMessage.css';
import '../style/RegisterStyle.css';

function RegisterComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/admin/register', {
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
    })
    .catch(error => console.log(error))
    setUsername('');
    setPassword('');
  }

  return (
    <div>
      <HeaderLayoutComponent />

      <form className="register-form">
        <div className="register-container">
          <h2>Admin Register</h2>
          <input 
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            value={username}
            onChange={event => setUsername(event.target.value)} />
          <input 
            type="text"
            placeholder="Password"
            name="password"
            id="password"
            value={password}
            onChange={event => setPassword(event.target.value)} />
          <button 
            type="submit"
            onClick={event => register(event)}>Register
          </button>
          <a href="/login">Go to login page</a>
          <div id="error-message"></div>
        </div>
      </form>
    </div>
  );

};

export default RegisterComponent;