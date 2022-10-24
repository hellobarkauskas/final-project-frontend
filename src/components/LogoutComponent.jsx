// admin logout komponentas, pašalina token iš localStorage, taip apribojama prieiga prie add customer/customers list.

import AdminPanelComponent from "./AdminPanelComponent";
import '../style/LogoutStyle.css';

function LogoutComponent() {
  localStorage.removeItem("token");
  localStorage.removeItem("adminId");

  return (
    <div>
      <AdminPanelComponent />
      <div className='logout-container'>
        <h2>Logout successful!</h2>
        <a href="/login">Go to login page</a>
      </div>
    </div>
  );
  
};

export default LogoutComponent;