import { Link } from 'react-router-dom';
import '../style/HeaderLayoutStyle.css';
import '../style/CustomersPage.css';

function CustomersPanelComponent() {

  return (
    <div>
      <div className='customers-panel-container header-style'>
        <Link to='/'>Admin</Link>
        <Link to='/add'>New customer</Link>
        <Link to='/list'>Existing customers</Link>
      </div>
      <div className='customers-page-container'>
        <h2>Customers page</h2>
      </div>
    </div>
  );

};

export default CustomersPanelComponent;