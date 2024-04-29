import { useState } from 'react'
import items from './Data';
import './App.css'
import Tours from './components/Tours'

function App() {
  const [tours, setTours] = useState(items);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id); // Corrected filter function
    setTours(newTours);
  }

  if (tours.length === 0)
  {
    return (

    <div className='refresh'>
      <h2>No Tours left!!</h2>

      {/* when you click the button refresh all data return back */}
    <button className='refresh-btn' onClick={() => setTours(items)}>   
       Refresh
    </button>

    </div>

    );

  }
 
  return (
    <div className='App'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
