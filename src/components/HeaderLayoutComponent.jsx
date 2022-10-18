import { Link } from 'react-router-dom';
import '../style/HeaderLayout.css';

function HeaderLayoutComponent() {

  return (
    <header className='header-container'>
      <Link to='/'>Admin Panel</Link>
      {/* <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
      <Link to='/add'> Add Customer</Link>
      <Link to='/customers'>Customers List</Link> */}
      <Link to='/customers'>Customers</Link>
    </header>
  )
}

export default HeaderLayoutComponent;