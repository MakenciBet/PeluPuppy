import { useEffect } from "react";
import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const getProducts = async() => {
        const res = await fetch('./publicaciones.json')
        const data = await res.json()
        setProducts(data)
    }

    useEffect(() => {
        getProducts()
    }, []);

    const createProduct = product => {
        setProducts([product, ...products])
    }

    const deleteProduct = (id) => {
        const newProducts = products.filter(product => product.id !== id)
        setProducts(newProducts)
    }

    const updateProduct = newProduct => {
        const newProducts = products.map(product => {
            if(product.id === newProduct.id){
                return newProduct
            }
            return product
        })
        setProducts(newProducts)
    } 

    return (
        <ProductContext.Provider value={{products, createProduct, deleteProduct, updateProduct}}>{children}</ProductContext.Provider>
    );
};

export default ProductProvider;