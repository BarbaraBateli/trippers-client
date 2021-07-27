

import { Link, NavLink } from "react-router-dom";
import "../assets/styles/main.scss"


function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">

            <Link className="navbar-brand" to="#">TRIPPERS</Link>

            <button 
                className="navbar-toggler"
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#toggleMobileMenu" 
                aria-controls="toggleMobileMenu" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="toggleMobileMenu">
                <ul className="navbar-nav ms-auto text-center me-5">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
                    </li>

                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Perfil
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="#">Ver perfil</Link></li>
                            <li><Link className="dropdown-item" to="#">Editar perfil</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="#">Sair</Link></li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
  );
}

export default Navbar;