import { useProductContext } from "../context/ProductContext";
import "../pages/Carrito.css"; 

const Carrito = () => {
  const { carrito, sumaTotalPeluquerias } = useProductContext();
  console.log(carrito);

  return (
    <div className="carrito-container">
      <div className="titulo-container">
        <h1 className="titulo">Carrito de compras</h1>
      </div>
      <h2 className="subtitulo">Recuerda que comprando tu servicio a través de nuestra página, estás pagando un 10% menos que directo en el local.</h2>
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
