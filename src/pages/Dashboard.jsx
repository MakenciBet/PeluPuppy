import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

import "../pages/Dashboard.css"; 

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { createProduct, products, deleteProduct } = useContext(ProductContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      description,
      price,
      img,
      id: Date.now(),
      user: user.email,
    };
    createProduct(newProduct);
    setTitle("");
    setDescription("");
    setPrice("");
    setImg("");
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Bienvenid@: {user.name}</h1>
      <h2 className="dashboard-subtitle">guau guau</h2>
      <form onSubmit={handleSubmit} className="dashboard-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Nombre Peluquería"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="URL de la imagen"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-add-product">
          Agregar Peluquería
        </button>
      </form>

      <div className="product-list">
        {products
          .filter((product) => product.user === user.email)
          .map((product) => (
            <article key={product.id} className="product-card">
              <h2>{product.title}</h2>
              <div className="product-actions">
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="btn-delete"
                >
                  Eliminar
                </button>
                <Link to={`/update/${product.id}`} className="btn-edit">
                  Editar
                </Link>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
