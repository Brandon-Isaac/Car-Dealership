import React, { useState } from 'react';
import './Admin.css'

const AdminPage = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    description: '',
    image: null // For storing the selected image file
  });

  const handleChange = e => {
    if (e.target.type === 'file') {
      // Handle file input separately
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('make', formData.make);
      formDataToSend.append('model', formData.model);
      formDataToSend.append('year', formData.year);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('image', formData.image);

      // Send formDataToSend to your backend API to create a new car entry
      const response = await fetch('/api/cars', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        // Handle success
        console.log('Car added successfully!');
      } else {
        // Handle error
        console.error('Failed to add car.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Add New Car</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Make:</label>
          <input type="text" name="make" value={formData.make} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Model:</label>
          <input type="text" name="model" value={formData.model} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Year:</label>
          <input type="text" name="year" value={formData.year} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="text" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" name="image" onChange={handleChange} accept="image/*" />
        </div>
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AdminPage;
