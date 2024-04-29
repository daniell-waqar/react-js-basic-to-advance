// Products.js
import React from 'react';
import ProductItem from './ProductItem';
import './Products.css';
import Card from './Card';

function Products(props) {
  return (
    <Card className="products">
      {props.items.map((item, index) => (
        <ProductItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default Products;