// src/components/AddFoodForm.js
import React, { useState } from 'react';

const AddFoodForm = () => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');

  const handleAddFood = () => {
    // Implement logic to handle adding a new food item
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
      </form>
    </div>
  );
};

export default AddFoodForm;
