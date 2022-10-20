import { useEffect, useState } from "react";
import CustomersPanelComponent from './CustomersPanelComponent';

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
      <CustomersPanelComponent />

      <h2>Customers List</h2>
      <div className="customers-list-container">
        { data && data.map((customer) => {
          return (
            <div className="customer" key={customer.id}>
              <p>{customer.name}</p>
              <p>{customer.surname}</p>
              <p>{customer.email}</p>
              <p>{customer.age}</p>
              <p>{customer.admin_id}</p>
            </div>
          )
        })}
      </div>
    </div>
  )

};

export default CustomersListComponent;