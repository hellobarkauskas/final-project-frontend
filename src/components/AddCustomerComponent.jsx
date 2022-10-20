import { useState } from "react";
import CustomersPanelComponent from "./CustomersPanelComponent";
import '../style/ErrorMessage.css';

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
      <CustomersPanelComponent />

      <form className="add-customer-container">
        <div className="add-customer-container-style">
          <h2>Add Customer</h2>
          <label 
            htmlFor="name">name
          </label>
          <input 
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={event => setName(event.target.value)} />
          <label 
            htmlFor="surname">surname
          </label>
          <input 
            type="text" 
            name="surname"
            id="surname"
            value={surname}
            onChange={event => setSurname(event.target.value)} />
          <label 
            htmlFor="email">email
          </label>
          <input 
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={event => setEmail(event.target.value)} />
          <label 
            htmlFor="age">age
          </label>
          <input 
            type="text"
            name="age"
            id="age"
            value={age}
            onChange={event => setAge(event.target.value)} />
          <label 
            htmlFor="adminId">admin
          </label>
          <input 
            type="number"
            name="adminId"
            id="adminId"
            value={adminId}
            onChange={event => setAdminId(event.target.value)} />
          <button 
            type="submit" 
            onClick={event => add(event)}>Add
          </button>                                  
        </div>     
      </form>
      <div id="error-message"></div>
    </div>
  );

};

export default AddCustomerComponent;