function LogoutComponent() {
  localStorage.removeItem("token");
  localStorage.removeItem("adminId");
};

export default LogoutComponent;