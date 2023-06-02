import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritoContext";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const { addFavorites, favorites } = useContext(FavoritosContext);

  const handleAddToFavorites = () => {
    addFavorites(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Agregado a tus favoritos",
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <article>
      <h2>{product.title}</h2>
      <img src={product.img} alt="" />
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      <div style={{ display: "flex" }}>
        <button style={{ marginRight: "10px" }}>Comprar</button>
        <button
          onClick={handleAddToFavorites}
          disabled={favorites.some(item => item.id === product.id)}
        >
          Favorito
        </button>
      </div>
    </article>
  );
};

export default ProductCard;


