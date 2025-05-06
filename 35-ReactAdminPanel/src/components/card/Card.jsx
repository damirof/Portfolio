import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { updateWishlist } from '../../redux/features/wishlistSlice';
import {addBasket} from '../../redux/features/basketSlice';
import {setDetail} from '../../redux/features/detailSlice';
import { Link } from 'react-router-dom';


const Card = ({ product }) => {
  console.log(product);

  const dispatch = useDispatch()
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', display: "flex", flexDirection: "column", textAlign: "center" }}>
      <div style={{ position: "relative" }}>
        <FavoriteBorderIcon 
          onClick={() => dispatch(updateWishlist(product))}
          style={{ position: "absolute", top: "5px", right: "5px", cursor: "pointer" }} />
        <Link to="/detail" onClick={() => dispatch(setDetail(product))} ><img src={product.image} alt="" style={{ width: "240px", height: "220px" }} /></Link>    </div>
      <h2>{product.title.slice(0, 10)}</h2>
      <strong> $ {product.price} </strong>
      <button style={{ backgroundColor: "blue", width: "230px", height: "40px", color: "white", borderRadius: "10px", border: "0", cursor: "pointer" }}
        onClick={() => dispatch(addBasket(product))}>Add Basket</button>
    </div>
  );
};

export default Card;
