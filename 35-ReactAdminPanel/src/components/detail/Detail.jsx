import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBasket } from '../../redux/features/basketSlice';  // `addBasket` funksiyasını istifadə edirik
import { useNavigate } from 'react-router-dom';  // navigate-i import edirik
import './Detail.css';

const Detail = () => {
  const { detail } = useSelector((state) => state.detail); // `detail`-i store-dan çəkirik
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Navigate-i tərtib edirik

  const handleAddToBasket = () => {
    dispatch(addBasket(detail));  // Səbətə məhsulu əlavə edirik
    navigate('/basket');  // Səbət səhifəsinə yönləndiririk
  };

  return (
    <div className="detail-wrapper">
      <div className="detail-card">
        <div className="detail-image">
          <img src={detail.image} alt={detail.title} />
        </div>
        <div className="detail-info">
          <h2 className="detail-title">{detail.title}</h2>
          <p className="detail-desc">{detail.description}</p>
          <p className="detail-category"><strong>Kateqoriya:</strong> {detail.category}</p>

          <div className="detail-footer">
            <span className="detail-price">${detail.price}</span>
            <button className="detail-button" onClick={handleAddToBasket}>Add to basket</button>  {/* Düymə ilə yönləndirmə */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
