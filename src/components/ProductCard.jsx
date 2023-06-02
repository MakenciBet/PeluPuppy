/* eslint-disable react/prop-types */

import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritoContext";

const ProductCard = ({ product}) => {

    const {addFavorites, favorites} = useContext(FavoritosContext)

  return (
    <article >
    <h2>{product.title}</h2>
    <img src={product.img} alt="" />
    <p>{product.description}</p>
    <p>Precio: {product.price}</p>
    <button>Comprar</button>  
    <button onClick={() => addFavorites(product) } disabled={ favorites.some(item => item.id === product.id)}> favorito </button>
  </article>
  );
};

export default ProductCard
