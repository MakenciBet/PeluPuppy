import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../context/ProductContext"
import { useParams } from "react-router-dom"
import { UserContext } from "../context/UserContext";

const Update = () => {

    const {id} = useParams();
    const {products, UpdateProduct} = useContext(ProductContext);
    const {user} = useContext(UserContext)
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');

    useEffect(() => {
       const findProduct = products.find((item) => item.id === parseInt(id));
       console.log(findProduct);
        setTitle(findProduct.title);
        setDescription(findProduct.description);
        setPrice(findProduct.price);
        setImg(findProduct.img);
    }, [id]);

     

    const handleSubmit = (e) => {
        e.preventDefault();
       const newProduct ={
          title,
          description,
          price,
          img,
          id: parseInt(id),
          user: user.email
        }
       UpdateProduct(newProduct);
       console.log("editado")
      };
    

  return <div>
  <h1>Actualizar Servicio</h1>
  
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Nombre Peluquería" value={title} onChange={e => setTitle(e.target.value)} />
    <input type="text" placeholder="Descripción" value={description} onChange={e => setDescription(e.target.value)} />
    <input type="text" placeholder="Precio" value={price} onChange={e => setPrice(e.target.value)}/>
    <input type="text" placeholder="img url" value={img} onChange={e => setImg(e.target.value)}/>
    <button>Actualizar</button>
  </form>
   
    </div>
}

export default Update
