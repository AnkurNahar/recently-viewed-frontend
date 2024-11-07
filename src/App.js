import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecentlyViewedCarousel from './components/RecentlyViewedCarousel';
import ProductDetails from './components/ProductDetails';

const App = () => {
  const userId = "hmFretB7YKgdl4Yew4m7FTlNH663"; //can be made dynamic once signup/login implemented
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RecentlyViewedCarousel userId={userId} />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;