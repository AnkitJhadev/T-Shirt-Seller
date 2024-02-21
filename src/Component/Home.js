// Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h2>Add a New T-Shirt</h2>
      <div className="form-group">
        <label>T-Shirt Name:</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea rows="4"></textarea>
      </div>
      <div className="form-group">
        <label>Price:</label>
        <input type="text" />
      </div>
      <button className="add-btn">Add Product</button>
    </div>
  );
}

export default Home;
