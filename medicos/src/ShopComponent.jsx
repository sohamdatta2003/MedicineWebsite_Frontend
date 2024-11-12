import React from 'react';
import './Shop.css';
import img from './assets/image.png';
import img1 from './assets/image (1).png';
import img2 from './assets/image (2).png';
import img3 from './assets/image (3).png';
import img4 from './assets/download (3).png';

const ShopComponent = () => {
  return (
    <div className="shop-container">
      <div className="header">
        <div className="header-shop">Shop</div>
        <div className="search-bar">
          <input type="text" placeholder="Search by Category" />
          <button><img src={img4}/></button>
        </div>
      </div>
      <div className="categories">
        <div className="category-item tablets">
          <h2>TABLETS</h2>
          <button><img src={img} alt="tablets" /></button>
        </div>
        <div className="category-item liquids">
          <h2>LIQUIDS</h2>
          <button><img src={img1} alt="liquids" /></button>
        </div>
      </div>
      <div className="items">
        <div className="items-title">Items</div>
        <div className='item-section'>
            <div className="item-card">
              <img src={img2} alt="Benadryl" />
              <div className="item-info">
                <h3>Benadryl</h3>
                <button>Buy Now</button>
              </div>
            </div>
            <div className="item-card">
              <img src={img3} alt="Aspirin" />
              <div className="item-info">
                <h3>Aspirin</h3>
                <button>Buy Now</button>
              </div>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default ShopComponent;

