import { Link } from 'react-router-dom';
import '../style/HeaderLayout.css';

function HeaderLayoutComponent() {

  return (
    <header className='header-container'>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
      <Link to='/add'> Add Customer</Link>
      <Link to='/'>Customers List</Link>
    </header>
  )
}

export default HeaderLayoutComponent;