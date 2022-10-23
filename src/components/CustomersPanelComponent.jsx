import { Link } from 'react-router-dom';
import '../style/HeaderStyle.css';
import LogoutComponent from './LogoutComponent';


function CustomersPanelComponent() {

  return (
    
    <div className='customers-panel-container header-style'>
      <Link to='/'>Home</Link>
      <Link to='/add'>Add Customer</Link>
      <Link to='/list'>Customers List</Link>
      <LogoutComponent />
    </div>
  )
}

export default CustomersPanelComponent;