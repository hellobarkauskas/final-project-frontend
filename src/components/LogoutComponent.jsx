function LogoutComponent() {
  localStorage.removeItem("token");
  localStorage.removeItem("adminId");

  return (

    <div className='logout-button-container'>
      <button
        className="logout-button"
        type="submit"
        onClick={LogoutComponent}>Logout
      </button>
    </div>
  )
  
};

export default LogoutComponent;