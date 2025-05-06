import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/features/productSlice';
import Card from '../card/Card';

const Cards = () => {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);

    const { wishlist } = useSelector((state) => state.wishlist);
    console.log(wishlist);
    



    useEffect(() => {
        dispatch(fetchProducts());  
    }, [dispatch]);


    return (
            <div style={{display:"flex", flexWrap:"wrap",gap:"20px"}}>
                {products.map((product) => (
                    <Card key={product.id} product={product}/>
                ))}
            </div>
    );
};

export default Cards;
