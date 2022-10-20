import { useState } from "react";
import HeaderLayoutComponent from "./HeaderLayoutComponent";
import '../style/ErrorMessage.css';

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

      <form className="register-container">
        <div className="register-container-style">
          <h2>Admin Register</h2>
          <label
            htmlFor='username'>username
          </label>
          <input 
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={event => setUsername(event.target.value)} />
          <label 
            htmlFor="password">password
          </label>
          <input 
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={event => setPassword(event.target.value)} />
          <button 
            type="submit"
            onClick={event => register(event)}>Register
          </button>
        </div>
      </form>
      <div id="error-message"></div>
    </div>
  );

};

export default RegisterComponent;