import Swal from 'sweetalert2'
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from 'react-router-dom';

import "../pages/Register.css"; 

const Register = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repassword) {
      return alert("Las contraseñas no coinciden");
    }

    const userExists = register({
      name,
      email,
      password,
      phone,
      id: Date.now(),
    });

    if (userExists) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El correo electrónico ya está registrado',
      });
    }

    navigate.push("/dashboard");
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Registro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            placeholder="Teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Repita su Contraseña"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-register">
          Registrarme
        </button>
      </form>
    </div>
  );
};

export default Register;
