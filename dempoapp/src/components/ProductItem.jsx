// ProductItem.js
import React, { useState } from 'react';
import ProductDate from './ProductDate';
import './ProductItem.css';
import Card from './Card';

function ProductItem(props) {

  const [title , SetTitle] = useState(props.title);

  function ClickHandler() {
    
    SetTitle("Popcorn");
    console.log("Button Clicked!!");
  }

  return (
    <Card className="product-item">
      <div className='product-item-content'>
        <div className='product-date'>
          <ProductDate date={props.date} />
        </div>
        <div className='product-info'>
          <h2>{title}</h2>
          <p>Amount: ${props.amount}</p>
          <button onClick={ClickHandler}>Add to Cart</button>
        </div>
      </div>
    </Card>
  );
}

export default ProductItem;