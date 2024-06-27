import React, { useState } from 'react';
import axios from 'axios';

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    NOM: 'Camping Example',
    SITUATION: 'Mountain',
    LATITUDE: 32.5,
    LONGITUDE: -5.6,
    ANNEXES: 'Basic',
    EMPLACEMENTS: 10,
    ELECTRICITE: 'Oui',
    EAUXGRISES: 'Non',
    RESTAURATION: 'Oui',
    PISCINE: 'Non',
    NOTATION: '3.5'
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error making prediction', error);
    }
  };

  return (
    <div>
      <h1>Camping Price Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Latitude: </label>
          <input type="number" name="LATITUDE" value={formData.LATITUDE} onChange={handleChange} />
        </div>
        <div>
          <label>Longitude: </label>
          <input type="number" name="LONGITUDE" value={formData.LONGITUDE} onChange={handleChange} />
        </div>
        {/* Add inputs for other form fields */}
        <button type="submit">Predict</button>
      </form>
      {prediction && <h2>Predicted Price: {prediction}</h2>}
    </div>
  );
};

export default PredictionForm;
