import { useState } from 'react';
import Product from '../components/Product';
import ProductForm from '../components/ProductForm';
import Modal from '../components/Modal';

const Products = ({ products, loading, onCreate, onUpdate, onDelete, onReset }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleSubmit = (productData) => {
    if (editingProduct) {
      onUpdate(editingProduct.id, productData);
    } else {
      onCreate(productData);
    }
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  if (loading) {
    return <div className="text-center py-8">Yükleniyor...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product</h1>
        <div className="space-x-2">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
          <button 
            onClick={onReset}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <Product 
            key={product.id} 
            product={product} 
            onEdit={handleEdit} 
            onDelete={onDelete} 
          />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => {
        setIsModalOpen(false);
        setEditingProduct(null);
      }}>
        <ProductForm 
          onSubmit={handleSubmit} 
          initialData={editingProduct || { title: '', price: 0 }} 
        />
      </Modal>
    </div>
  );
};

export default Products;