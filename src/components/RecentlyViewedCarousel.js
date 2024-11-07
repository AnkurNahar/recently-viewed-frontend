import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import { getRecentlyViewedProducts } from '../services/api';

const RecentlyViewedCarousel = ({ userId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getRecentlyViewedProducts(userId);
        
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch recently viewed products");
      }
    };

    fetchProducts();
  }, [userId]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="recently-viewed-carousel">
      <h2>Recently Viewed Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default RecentlyViewedCarousel;
