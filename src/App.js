import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';

function App() {
  
  return (
   <Routes>
    <Route path='/login' element={<LoginComponent />} />
   </Routes>
  );
}

export default App;
