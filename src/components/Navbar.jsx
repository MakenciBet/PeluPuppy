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
                Mis Servicios
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" role="button" className="navbar-link">
                Perfil
              </NavLink>
            </li>
            <li>
              <NavLink to="/favoritos" role="button" className="navbar-link">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>  <span className="favorites-count">{favorites.length}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/carrito" role="button" className="navbar-link">
                Carrito
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
