import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Swal from "sweetalert2";

import "../pages/Login.css"; 

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false);

    if (!email.trim()) {
      setError(true);
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Falta llenar el email",
      });
    }

    const user = login(email, password);
    if (user) {
      setEmail("");
      setPassword("");
      return navigate("/dashboard");
    }
    setShowError(true);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Credenciales incorrectas",
    });
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-login">
          Acceder
        </button>
      </form>
      <CSSTransition
        in={error}
        timeout={300}
        classNames="error-transition"
        unmountOnExit
      >
        <div className="error-message">Porfavor de un correo electronico válido</div>
      </CSSTransition>
    </div>
  );
};

export default Login;
