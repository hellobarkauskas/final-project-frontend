import { Link } from 'react-router-dom';

function CustomersPanelComponent() {

  return (
    <div className='customers-panel-container'>
      <Link to='/add'>Add Customer</Link>
      <Link to='/list'>Customer List</Link>
    </div>
  )
}

export default CustomersPanelComponent;