import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritoContext";

const Favorites = () => {

  const { favorites, deleteFavorites } = useContext(FavoritosContext)

  return <div>
    <h1>Favoritas</h1>
    {
      favorites.map(item => (
        <article key={item.id}>
          <p>{item.title}</p>
          <button onClick={() => deleteFavorites(item.id)} >Eliminar</button>
        </article>
      ))
    }
    {
      favorites.length === 0 && <p>No tienes seleccionado ningún favorito</p>
    }
  </div>
};

export default Favorites; 