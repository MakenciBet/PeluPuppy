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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>{" "}
                <span className="favorites-count">{favorites.length}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/carrito" role="button" className="navbar-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
              </NavLink>
            </li>
            <li>
              <button
                role="button"
                className="logout-button navbar-link"
                onClick={logout}
              >
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
