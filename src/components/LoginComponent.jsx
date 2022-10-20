import { useState } from "react";
import HeaderLayoutComponent from "./HeaderLayoutComponent";
import LogoutComponent from './LogoutComponent';
import '../style/ErrorMessage.css';

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

      <form className="login-container">
        <div className="login-container-style">
          <h2>Admin Login</h2>
          <label 
            htmlFor='username'>username
          </label>
          <input 
            type="text" 
            name="username" 
            id="username" 
            value={username} 
            onChange={event => setUsername(event.target.value)} />
          <label htmlFor='password'>password
          </label>
          <input 
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={event => setPassword(event.target.value)} />
          <button 
            type="submit" 
            onClick={event => login(event)}>Login
          </button>
          <button 
            type="submit"
            onClick={LogoutComponent}>Logout
          </button>
        </div>
      </form>
      <div id="error-message"></div>
    </div>
  );

};

export default LoginComponent;