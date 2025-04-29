const Product = ({ product, onEdit, onDelete }) => {
    return (
      <div className="border p-4 rounded shadow hover:shadow-md transition-shadow">
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-lg font-bold text-blue-600 mb-3">${product.price}</p>
        <div className="flex space-x-2">
          <button 
            onClick={() => onEdit(product)}
            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
          >
           Edit
          </button>
          <button 
            onClick={() => onDelete(product.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default Product;