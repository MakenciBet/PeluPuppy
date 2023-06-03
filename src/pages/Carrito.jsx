import { useProductContext } from "../context/ProductContext";
import "../pages/Carrito.css"; // Importa un archivo CSS personalizado para los estilos del carrito

const Carrito = () => {
  const { carrito } = useProductContext();
  console.log(carrito);

  return (
    <div className="carrito-container">
      <h1>Carrito</h1>
      <div className="item-list">
        {carrito.map((item) => (
          <div key={item.id} className="item">
            <h2>{item.title}</h2>
            <p className="item-price">${item.price}</p>
            <div className="quantity-container">
              <button className="quantity-button">-</button>
              <p className="item-quantity">8</p>
              <button className="quantity-button">+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrito;
