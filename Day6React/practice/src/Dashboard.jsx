import { Link } from "react-router-dom";

function Dashboard() {
  const role = localStorage.getItem("role");

  return (
    <div>
      <h1>Dashboard</h1>

      <Link to="/products">Products</Link>

      


      {role === "Admin" && <Link to="/add-user">Add User</Link>}

      


      <Link to="/logout">Logout</Link>
    </div>
  );
}

export default Dashboard;
 