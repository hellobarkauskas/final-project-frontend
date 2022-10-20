import { Link } from 'react-router-dom';
import '../style/HeaderStyle.css';

function CustomersPanelComponent() {

  return (
    
    <div className='customers-panel-container header-style'>
      <Link to='/'>Admin Panel</Link>
      <Link to='/add'>Add Customer</Link>
      <Link to='/list'>Customer List</Link>
    </div>
  )
}

export default CustomersPanelComponent;