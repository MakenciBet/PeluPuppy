
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
    navigate("/carrito")();
  };

  return (
    <article >
    <h2>{product.title}</h2>
    <img src={product.img} alt="" />
    <p>{product.description}</p>
    <p>Precio: {product.price}</p>
    <button onClick={() => handleClicAdd(product.id, product.price, product.title)}>Comprar</button>

    <button onClick={() => addFavorites(product) } disabled={ favorites.some(item => item.id === product.id)}> favorito </button>
  </article>
  );
};

export default ProductCard