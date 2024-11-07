import React from 'react';
import { Link } from 'react-router-dom'; 

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h4>{product.productName}</h4>
      <p>Viewed on: {product.viewedAt}</p>
      <Link to={`/products/${product.productId}`} className="details-link">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;