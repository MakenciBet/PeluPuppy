/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("./publicaciones.json");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const createProduct = (product) => {
    setProducts([product, ...products]);
  };

  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  const updateProduct = (newProduct) => {
    const newProducts = products.map((product) => {
      if (product.id === newProduct.id) {
        return newProduct;
      }
      return product;
    });
    setProducts(newProducts);
  };

  // esto es nuevo:
  //const carrito = ["1", "2", "3"]
  const [peluquerias, setPeluquerias] = useState([]);

  const getPelus = async () => {
    const response = await fetch("publicaciones.json");
    const data = await response.json();
    setPeluquerias(data);
  };

  useEffect(() => {
    getPelus();
  }, []);

  const [carrito, setCarrito] = useState([
    
  ]);

  const addPeluqueria = (peluqueria) => {
    setCarrito([...carrito, peluqueria]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        createProduct,
        deleteProduct,
        updateProduct,
        peluquerias,
        carrito,
        addPeluqueria,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

//mini hook
export const useProductContext = () => useContext(ProductContext);

export default ProductProvider;
