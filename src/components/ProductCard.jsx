<<<<<<< HEAD
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritoContext";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const ProductCard = ({ product, }) => {

    const {addFavorites, favorites} = useContext(FavoritosContext);
    const {peluqueria, addPeluqueria} = useProductContext(); 
    const navigate =useNavigate()

  const handleClicAdd = (id, price, title) => {
    addPeluqueria({id, price, title});
    navigate("/carrito");
  };

  return (
    <article >
    <h2>{product.title}</h2>
    <img src={product.img} alt="" />
    <p>{product.description}</p>
    <p>Precio: {product.price}</p>
    <button onClick={() => handleClicAdd (peluqueria)} >Comprar</button>  
    <button onClick={() => addFavorites(product) } disabled={ favorites.some(item => item.id === product.id)}> favorito </button>
  </article>
=======
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
>>>>>>> 75efb0be96655dfeb3266a0294c1600e03a2f596
  );
};

export default ProductCard;


