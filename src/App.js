import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import AdminPanelComponent from './components/AdminPanelComponent';
import CustomersPanelComponent from './components/CustomersPanelComponent';
import AddCustomerComponent from './components/AddCustomerComponent';
import CustomersListComponent from './components/CustomersListComponent';
import LogoutComponent from './components/LogoutComponent';

function App() {
  
  return (
   <Routes>
    <Route path='/' element={<AdminPanelComponent />} />
    <Route path='/login' element={<LoginComponent />} />
    <Route path='/register' element={<RegisterComponent />} />
    <Route path='/logout' element={<LogoutComponent />} />
    <Route path='/customers' element={<CustomersPanelComponent />} />
    <Route path='/add' element={<AddCustomerComponent />} />
    <Route path='/list' element={<CustomersListComponent /> } />
   </Routes>
  );
}

export default App;
