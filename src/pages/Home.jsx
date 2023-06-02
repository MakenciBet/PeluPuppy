import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "../pages/Home.css"; 
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [searchText, setSearchText] = useState('');

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">PeluPuppy</h1>
        <h2 className="home-subtitle">Sólo lo mejor para tu peludo</h2>
      </header>
      <div className="image-container">
        <img
          src="https://vida-peluda.com/wp-content/uploads/2021/04/144.jpg"
          alt="Imagen"
          className="home-image"
        />
      </div>
      <div className="product-list-container">
        <h3 className="product-list-title">Lista de Peluquerias</h3>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        <div className="product-list">
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
