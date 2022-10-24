// customers list komponentas su fetch ir autentifikacija.

import { useEffect, useState } from "react";
import CustomersPanelComponent from './CustomersPanelComponent';
import '../style/CustomersListStyle.css';

function CustomersListComponent() {
  const token = localStorage.getItem('token');
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/customers/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })

    .then(response => response.json())
    .then(response => {setData(response)})
    .catch(error => console.log(error))

  }, [token]);

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
          <div className="customers-list-container">
            <h2>Existing customers</h2>
            <table className="customers-table-container">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Admin</th>
                  <th>Option</th>
                </tr>
              </thead>
              { data && data.map((customer) => {
                return (
                  <tbody className="customer-container" key={customer.id}>
                    <tr>
                      <td>{customer.name}</td>
                      <td>{customer.surname}</td>
                      <td>{customer.email}</td>
                      <td>{customer.age}</td>
                      <td>{customer.admin_id}</td>
                      <td className="option-button-container">
                        <button>Edit</button>
                        <button>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                )
              })}
            </table>
          </div>        
        </div>
      }
    </div>
  );

};

export default CustomersListComponent;