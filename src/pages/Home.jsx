import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "../pages/Home.css";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [searchText, setSearchText] = useState('');
  const [orden, setOrden] = useState(null);

  const handleOrdenChange = (event) => {
    setOrden(event.target.value);
  };

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (orden === "priceAsc") {
        return a.price - b.price;
      } else if (orden === "priceDesc") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

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
        <div className="order-select">
          <label htmlFor="orden">Ordenar por:</label>
          <select id="orden" value={orden} onChange={handleOrdenChange}>
            <option value="">Sin orden</option>
            <option value="priceAsc">Precio (menor a mayor)</option>
            <option value="priceDesc">Precio (mayor a menor)</option>
          </select>
        </div>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={{ ...product, price: product.price }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
