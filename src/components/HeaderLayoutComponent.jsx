import { Link } from 'react-router-dom';
import '../style/HeaderLayoutStyle.css';

function HeaderLayoutComponent() {

  return (

    <header className='header-style'>
      <Link to='/'>Admin</Link>
      <Link to='/customers'>Customers page</Link>
    </header>
  );

};

export default HeaderLayoutComponent;