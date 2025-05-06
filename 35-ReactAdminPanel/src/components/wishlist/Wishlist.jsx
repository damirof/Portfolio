import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/Card';

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.wishlist);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {wishlist.length === 0 ? (
        <h2>Wishlist boşdur.</h2>
      ) : (
        wishlist.map((product) => <Card key={product.id} product={product} />)
      )}  
    </div>
  );
};

export default Wishlist;
