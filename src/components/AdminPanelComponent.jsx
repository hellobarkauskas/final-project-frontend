import { Link } from 'react-router-dom';

function AdminPanelComponent() {

  return (
    <div className='admin-panel-container'>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </div>
  )
}

export default AdminPanelComponent;