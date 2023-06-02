import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

import "../pages/Profile.css"; 

const Profile = () => {
  const { user, updateUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setPassword(user.password);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser({
      email: email,
      name: name,
      phone: phone,
      password: password,
      id: user.id,
    });

    Swal.fire("Datos actualizados");
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Perfil</h1>
      <form onSubmit={handleSubmit} className="profile-form">
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
        <button type="submit" className="btn-update">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default Profile;
