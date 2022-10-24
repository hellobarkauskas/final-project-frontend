import { Link } from 'react-router-dom';
import '../style/HeaderLayoutStyle.css';
import '../style/AdminPage.css';

function AdminPanelComponent() {

  return (
    <div>
      <div className='admin-panel-container header-style'>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/customers'>Customers page</Link>
        <Link to='/logout'>Logout</Link>
      </div>
      <div className='admin-page-container'>
        <h2>Admin Panel</h2>
      </div>
    </div>

  );

};


export default AdminPanelComponent;