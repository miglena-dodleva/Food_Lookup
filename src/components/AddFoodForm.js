// src/components/AddFoodForm.js
import React, { useState } from 'react';
import foodDatabase from '../foodDatabase';

const AddFoodForm = () => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [error, setError] = useState('');

  const handleAddFood = () => {
     // Implement logic to handle adding a new food item
     // Validate inputs
     if (!foodName || !calories) {
        alert('Please enter both food name and calories.');
        return;
     }

     // Check if calories is a valid number
     const caloriesValue = parseInt(calories, 10);
     if (isNaN(caloriesValue) || caloriesValue <= 0) {
       setError('Calories must be a positive number.');
       return;
     }

     // Create a new food item
     const newFoodItem = {
       id: foodDatabase.length + 1,
       name: foodName,
       calories: parseInt(calories, 10),  
      };

     // Update the local database
     foodDatabase.push(newFoodItem);
      
     // Update the local database
       // onAddFood(newFoodItem);

     // Clear form inputs
     setFoodName('');
     setCalories('');
     setError('');

     // Notify parent component about the new food item
     onAddFood(newFoodItem);
   
    };

  return (
    <div>
      <h2>Add New Food Item</h2>
      <form>
        <label>
          Food Name:
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
        </label>
        <label>
          Calories:
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleAddFood}>
          Add Food
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default AddFoodForm;
