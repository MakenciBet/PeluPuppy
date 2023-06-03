import { useProductContext } from "../context/ProductContext";
import "../pages/Carrito.css"; 

const Carrito = () => {
  const { carrito, sumaTotalPeluquerias } = useProductContext();
  console.log(carrito);

  return (
    <div className="carrito-container">
      <h1>Carrito</h1>
      <div className="item-list">
        {carrito.map((item) => (
          <div key={item.id} className="item">
            <h2>{item.title}</h2>
            <p className="item-price">${item.cantidad * item.price}</p>
            <div className="quantity-container">
              <p className="item-quantity">{item.cantidad}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Total: {sumaTotalPeluquerias}</h2>
    </div>
  );
};

export default Carrito;
