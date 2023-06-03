import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritoContext";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const { addFavorites, favorites } = useContext(FavoritosContext);
  const { peluqueria, addPeluqueria } = useProductContext();
  const navigate = useNavigate();

  const handleClicAdd = (id, price, title) => {
    addPeluqueria({ id, price, title });
    navigate("/carrito");
  };

  const handleAddToFavorites = () => {
    addFavorites(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Agregado a tus favoritos",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <article>
      <h2>{product.title}</h2>
      <img src={product.img} alt="" />
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => handleClicAdd(product.id, product.price, product.title)}>
          Comprar
        </button>
        <button
          onClick={handleAddToFavorites}
          disabled={favorites.some((item) => item.id === product.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
