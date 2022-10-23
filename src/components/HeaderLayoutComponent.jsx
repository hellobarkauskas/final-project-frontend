import { Link } from 'react-router-dom';
import '../style/HeaderStyle.css';
import LogoutComponent from './LogoutComponent';

function HeaderLayoutComponent() {

  return (

    <header className='header-style'>
      <Link to='/'>Home</Link>
      <Link to='/customers'>Customers</Link>
      <LogoutComponent />
    </header>
  )

};

export default HeaderLayoutComponent;