import { Link } from "react-router-dom";
import "../assets/NavBar.css"; // importar archivo de estilos

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item"> 
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/autos">Autos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/camionetas">Camionetas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/allVehiculos">Vehículos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

