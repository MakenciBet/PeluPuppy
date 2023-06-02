import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { FavoritosContext } from "../context/FavoritoContext";
import "../components/Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const { favorites } = useContext(FavoritosContext);

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li>
          <strong>PeluPuppy</strong>
        </li>
      </ul>
      <ul className="navbar-list">
        <li>
          <NavLink to="/" role="button" className="navbar-link">
            Home
          </NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink to="dashboard/" role="button" className="navbar-link">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" role="button" className="navbar-link">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/favoritos" role="button" className="navbar-link">
                Favoritos <span className="favorites-count">{favorites.length}</span>
              </NavLink>
            </li>
        
            <li>
              <button role="button" className="logout-button" onClick={logout}>
                Cerrar Sesión
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login" role="button" className="navbar-link">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" role="button" className="navbar-link">
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
