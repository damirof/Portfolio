    import React from 'react'
    import { useDispatch, useSelector } from 'react-redux';
    import { removeFromBasket } from '../../redux/features/basketSlice';

    const Basket = () => {
    const { basket } = useSelector((state) => state.basket);
    const dispatch = useDispatch()
    const totalPrice = basket.reduce((acc, item) => acc + item.price * item.count, 0);


    if (basket.length === 0) {
        return <h2 style={{ textAlign: "center", marginTop: "20px" }}>Basket boşdur.</h2>;
    }

    return (
        <div style={{ padding: "20px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
            <tr>
                <th style={thStyle}>Şəkil</th>
                <th style={thStyle}>Ad</th>
                <th style={thStyle}>Qiymət</th>
                <th style={thStyle}>Say</th>
                <th style={thStyle}>Edit</th>
            </tr>
            </thead>
            <tbody>
            {basket.map((product) => (
                <tr key={product.id}>
                <td style={tdStyle}>
                    <img src={product.image} alt={product.title} style={{ width: "80px", height: "80px", objectFit: "contain" }} />
                </td>
                <td style={tdStyle}>{product.title.slice(0, 20)}</td>
                <td style={tdStyle}>${product.price}</td>
                <td style={tdStyle}>{product.count}</td>
                <td  style={tdStyle}><button 
                    style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}
                    onClick={() => dispatch(removeFromBasket(product.id))}
                    >
                    remove
                    </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>

        <p>Total Price : {totalPrice}</p>
        </div>
    );
    };

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

    export default Basket;
