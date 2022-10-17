import { useState } from "react";
import HeaderLayoutComponent from "./HeaderLayoutComponent";

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
        })
    })

    .then(response => response.json())
    .then(response => console.log(response))
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
            for='username'>username
          </label>
          <input 
            type="text" 
            name="username" 
            id="username" 
            value={username} 
            onChange={event => setUsername(event.target.value)} />
          <label for='password'>password
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
        </div>
      </form>
    </div>
  );

};

// function LoginComponent() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const login = async (adminLogin) => {
//     adminLogin.preventDefault();
//     const response = await fetch(`http://localhost:8080/admin/login`, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(adminLogin)
//     });

//     const data = await response.json();

//     if (data.error) {
//         document.getElementById('error-message').textContent = data.error;
//         return;
//     };

//     localStorage.setItem('token', data.token);
//   };

//   return (
//     <div>
//       <HeaderLayoutComponent />

//       <form className="login-container">
//         <div className="login-container-style">
//           <h2>Admin Login</h2>
//           <label 
//             for='username'>username
//           </label>
//           <input 
//             type="text" 
//             name="username" 
//             id="username" 
//             value={username} 
//             onChange={adminLogin => setUsername(adminLogin.target.value)} />
//           <label for='password'>password
//           </label>
//           <input 
//             type="text"
//             name="password"
//             id="password"
//             value={password}
//             onChange={adminLogin => setPassword(adminLogin.target.value)} />
//           <button 
//             type="submit" 
//             onClick={adminLogin => login(adminLogin)}>Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );

// };

export default LoginComponent;