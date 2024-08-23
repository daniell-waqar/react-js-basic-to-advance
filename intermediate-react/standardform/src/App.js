import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    comments: true,
    candidates: true,
    offers: true,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={submitHandler} className="form-container">
      <div className="form-group">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Enter your first name here"
          onChange={changeHandler}
          value={formData.firstname}
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Enter your last name here"
          onChange={changeHandler}
          value={formData.lastname}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email here"
          onChange={changeHandler}
          value={formData.email}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select
          id="country"
          name="country"
          onChange={changeHandler}
          value={formData.country}
        >
          <option value="">Select your country</option>
          <option value="pakistan">Pakistan</option>
          <option value="india">India</option>
          <option value="america">America</option>
          <option value="canada">Canada</option>
          <option value="germany">Germany</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="address">Street Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Your address"
          onChange={changeHandler}
          value={formData.address}
        />
      </div>

      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Your city"
          onChange={changeHandler}
          value={formData.city}
        />
      </div>

      <div className="form-group">
        <label htmlFor="state">State / Province</label>
        <input
          type="text"
          id="state"
          name="state"
          placeholder="Your state"
          onChange={changeHandler}
          value={formData.state}
        />
      </div>

      <div className="form-group">
        <label htmlFor="zipcode">ZIP / Postal Code</label>
        <input
          type="text"
          id="zipcode"
          name="zipcode"
          placeholder="Your Postal code"
          onChange={changeHandler}
          value={formData.zipcode}
        />
      </div>

      <fieldset className="form-group">
        <legend>By Email</legend>
        <div className="flex">
          <input
            type="checkbox"
            id="comments"
            name="comments"
            onChange={changeHandler}
            checked={formData.comments}
          />
          <label htmlFor="comments">Comments</label>
          <p>Get notified when someone posts a comment</p>
        </div>

        <div className="flex">
          <input
            type="checkbox"
            id="candidates"
            name="candidates"
            onChange={changeHandler}
            checked={formData.candidates}
          />
          <label htmlFor="candidates">Candidates</label>
          <p>Get notified when a candidate applies for a job</p>
        </div>

        <div className="flex">
          <input
            type="checkbox"
            id="offers"
            name="offers"
            onChange={changeHandler}
            checked={formData.offers}
          />
          <label htmlFor="offers">Offers</label>
          <p>Get notified when a candidate accepts or rejects an offer</p>
        </div>
      </fieldset>

      <fieldset className="form-group">
        <legend>Push Notifications</legend>
        <p>These are delivered via SMS to your mobile phone</p>

        <div className="flex">
          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="pushEverything"
            onChange={changeHandler}
            checked={formData.pushNotifications === "pushEverything"}
          />
          <label htmlFor="pushEverything">Everything</label>
        </div>

        <div className="flex">
          <input
            type="radio"
            id="pushSameAsEmail"
            name="pushNotifications"
            value="pushSameAsEmail"
            onChange={changeHandler}
            checked={formData.pushNotifications === "pushSameAsEmail"}
          />
          <label htmlFor="pushSameAsEmail">Same as Email</label>
        </div>

        <div className="flex">
          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="pushNothing"
            onChange={changeHandler}
            checked={formData.pushNotifications === "pushNothing"}
          />
          <label htmlFor="pushNothing">Do not push anything</label>
        </div>
      </fieldset>

      <button type="submit">Save</button>
    </form>
  );
}

export default App;
