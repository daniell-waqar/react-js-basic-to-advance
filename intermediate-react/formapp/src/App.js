import './App.css';
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: ""
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();     // preventing default form submission behaviour 
    console.log(formData);   // do something other stuff
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"                  // to identify the current element
            value={formData.firstName}         // wehn re-render occurs take the value from formData
          /> 
          <br />
        </div>

        <div>
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
          />
        </div>

        <br />

        <div>
          <input
            type="text"
            placeholder="Enter your Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </div>

        <div>
          <textarea
            placeholder="Enter your comments"
            onChange={handleChange}
            name="comments"
            value={formData.comments}
          />
        </div>

        <div>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={formData.isVisible}
            id="isVisible"
            name="isVisible"
          />
          <label htmlFor="isVisible">Am I Visible?</label>
        </div>

        <div>
          <input
            type="radio"
            onChange={handleChange}
            id="Online-Mode"
            value="Online-Mode"
            name="mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="Online-Mode">Online Mode</label>
        </div>

        <div>
          <input
            type="radio"
            onChange={handleChange}
            id="Offline-Mode"
            value="Offline-Mode"
            name="mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </div>

        <label htmlFor='favCar'> What's your favorite car? </label>
        <select
          name='favCar'
          id='favCar'
          value={formData.favCar}
          onChange={handleChange}
        >
          <option value="scarpio">Scarpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="grandy">Grandy</option>
          <option value="audi">Audi</option>
          <option value="roko">Roko</option>
        </select>


        <br>
        </br>

        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
}

export default App;
