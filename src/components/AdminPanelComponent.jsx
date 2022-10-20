import { Link } from 'react-router-dom';
import '../style/HeaderStyle.css';

function AdminPanelComponent() {

  return (
    <div className='admin-panel-container header-style'>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </div>
  )
}

export default AdminPanelComponent;