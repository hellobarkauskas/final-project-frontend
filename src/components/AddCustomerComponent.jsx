// add customer komponentas su fetch, basic validacija ir autentifikacija.

import { useState } from "react";
import CustomersPanelComponent from "./CustomersPanelComponent";
import '../style/ErrorMessage.css';
import '../style/AddCustomerStyle.css';

function AddCustomerComponent() {
  const token = localStorage.getItem('token');
  const loggedInAdmin = localStorage.getItem('adminId');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [adminId, setAdminId] = useState(loggedInAdmin);



  const add = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/customers/add', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        age: age,
        admin_id: adminId
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
    console.log(token);
    console.log(loggedInAdmin);
    setName('');
    setSurname('');
    setEmail('');
    setAge('');
    setAdminId('');
  }

  return (
    <div>
      {
        token === null ?
        <div>
          <CustomersPanelComponent />
          <div className="unauthorized-access-container">
            <h2>Access unauthorized!</h2>
            <a href="/login">Go to login page</a>
          </div>
        </div>

        :

        <div>
          <CustomersPanelComponent />

          <form className="add-customer-form">
            <div className="add-customer-container">
              <h2>Register new customer</h2>
              <input 
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                value={name}
                onChange={event => setName(event.target.value)} />
              <input 
                type="text"
                placeholder="Surname"
                name="surname"
                id="surname"
                value={surname}
                onChange={event => setSurname(event.target.value)} />
              <input 
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                value={email}
                onChange={event => setEmail(event.target.value)} />
              <input 
                type="text"
                placeholder="Age"
                name="age"
                id="age"
                value={age}
                onChange={event => setAge(event.target.value)} />
              <button 
                type="submit" 
                onClick={event => add(event)}>Confirm
              </button>
              <div id="error-message"></div>                                   
            </div>
          </form>
        </div>
      }
    </div>
  );

};

export default AddCustomerComponent;