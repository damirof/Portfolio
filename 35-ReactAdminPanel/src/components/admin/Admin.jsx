import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct  ,removeProduct} from '../../redux/features/productSlice';


const Admin = () => {
    const thStyle = {
        border: "1px solid #ddd",
        padding: "10px",
        backgroundColor: "#f4f4f4",
        textAlign: "left"
    };

    const tdStyle = {
        border: "1px solid #ddd",
        padding: "10px"
    };

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products); 
    
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
    

    const productCreate = async () => {
        const newProduct = { image, title, price: parseFloat(price) };
      
        const response = await axios.post("http://localhost:3000/products", newProduct);
      
        dispatch(addProduct(response.data));
      
        setImage('');
        setTitle('');
        setPrice('');
      };
      const productDelete = async (id) => {
        await axios.delete(`http://localhost:3000/products/${id}`);
        dispatch(removeProduct(id));
      };
      




    return (
        <div>
            <div style={{ margin: "20px 0", display: "flex", gap: "10px" }}>
                <label htmlFor="">Image</label>
                <input type="url" name='image' value={image} onChange={(e)=>setImage(e.target.value)}/>
                <label htmlFor="">Title</label>
                <input type="text" name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label htmlFor="">Price</label>
                <input type="number" name='price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <button style={{ marginBottom: "20px", backgroundColor: "blue", color: "white", padding: "10px 15px", }}
                                onClick={productCreate}
                                >create</button>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={thStyle}>Image</th>
                        <th style={thStyle}>Title</th>
                        <th style={thStyle}>Price</th>
                        <th style={thStyle}>Editing</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td style={tdStyle}>
                                <img src={product.image} alt={product.title} style={{ width: "80px", height: "80px", objectFit: "contain" }} />
                            </td>
                            <td style={tdStyle}>{product.title.slice(0, 20)}</td>
                            <td style={tdStyle}>${product.price}</td>
                            <td style={tdStyle}><button
                                style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}
                                onClick={() => productDelete(product.id)}
                            >
                                remove
                            </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default Admin