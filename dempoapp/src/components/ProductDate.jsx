// ProductDate.js
import React from 'react';
import './ProductDate.css';

function ProductDate(props) {
  const day = props.date.getDate();
  const month = props.date.getMonth() + 1;
  const year = props.date.getFullYear();

  return (
    <div className='product-date-container'>
      <div className='product-day'>{day}</div>
      <div className='product-month'>{month}</div>
      <div className='product-year'>{year}</div>
    </div>
  );
}

export default ProductDate;