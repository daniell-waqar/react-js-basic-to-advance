// App.js
import React from 'react';
import './App.css';
import Products from './components/Products';
import NewProduct from './components/NewProduct';

function App() {
  const products = [
    {
      Id: 'p1',
      title: 'Biryani',
      amount: 150,
      date: new Date(2012, 9, 2)
    },
    {
      Id: 'p2',
      title: 'Ice Cream',
      amount: 100,
      date: new Date(2012, 9, 2)
    },
    {
      Id: 'p3',
      title: 'Bananas',
      amount: 200,
      date: new Date(2014, 2, 2)
    },
    {
      Id: 'p4',
      title: 'Lays',
      amount: 50,
      date: new Date(2019, 4, 2)
    }
  ];

  function AHandler (data)
  {
    // uplifting concept start here we are trying to communicate with parent (App) from childs
    console.log("I am inside parent ")
    console.log(data)
  }

  return (
    <div className='container'>
      <NewProduct OnApps = {AHandler} />
      <Products items={products} />
    </div>
  );
}

export default App;