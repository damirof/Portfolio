import { useState, useEffect } from 'react';
import Products from './pages/Products';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      toast.error('Ürünler yüklenirken hata oluştu!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreate = async (newProduct) => {
    try {
      const response = await axios.post('https://fakestoreapi.com/products', newProduct);
      setProducts([...products, response.data]);
      toast.success('Ürün başarıyla eklendi!');
    } catch (error) {
      toast.error('Ürün eklenirken hata oluştu!');
    }
  };

  const handleUpdate = async (id, updatedProduct) => {
    try {
      const response = await axios.put(`https://fakestoreapi.com/products/${id}`, updatedProduct);
      setProducts(products.map(product => product.id === id ? response.data : product));
      toast.success('Ürün başarıyla güncellendi!');
    } catch (error) {
      toast.error('Ürün güncellenirken hata oluştu!');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
      toast.success('Ürün başarıyla silindi!');
    } catch (error) {
      toast.error('Ürün silinirken hata oluştu!');
    }
  };

  const handleReset = async () => {
    try {
      await fetchProducts();
      toast.success('Ürünler başarıyla sıfırlandı!');
    } catch (error) {
      toast.error('Sıfırlama sırasında hata oluştu!');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <Products 
        products={products} 
        loading={loading}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        onReset={handleReset}
      />
    </div>
  );
}

export default App;