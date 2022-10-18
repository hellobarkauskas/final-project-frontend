import { useState } from "react";
import CustomersPanelComponent from "./CustomersPanelComponent";

function AddCustomerComponent() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [adminId, setAdminId] = useState('');

  const add = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/customers/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        age: age,
        adminId: adminId
      }),
    })

    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.log(error))
    setName('');
    setSurname('');
    setEmail('');
    setAge('');
    setAdminId('');
  }

  // const adminUsers = (bodyData) => {
  //   fetch('http://localhost:8080/admin/users', {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'        
  //     },
  //     body: JSON.stringify(bodyData)
  //   })

  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(error => console.log(error))
  // }

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
            type="text"
            name="adminId"
            id="adminId"
            value={adminId}
            onChange={event => setAdminId(event.target.value)} />
          <button 
            type="submit" 
            onClick={event => add(event)}>Login
          </button>                                  
        </div>     
      </form>
    </div>
  );

};

export default AddCustomerComponent;