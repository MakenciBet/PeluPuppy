import { createContext, useState } from "react";

export const FavoritosContext = createContext();

const FavoritosProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([])

    const addFavorites =(product) => {
        setFavorites([...favorites, product]);
    };

    const deleteFavorites = id => {
        const newFavorites = favorites.filter(item => item.id !== id)
        setFavorites(newFavorites)
    }

  return ( <FavoritosContext.Provider value={{favorites, addFavorites, deleteFavorites}} >{children}</FavoritosContext.Provider>);
};

export default FavoritosProvider;
