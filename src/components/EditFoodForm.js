// src/components/EditFoodForm.js
import React, { useState } from 'react';

const EditFoodForm = ({ foodItem, onEdit }) => {
  const [editedName, setEditedName] = useState(foodItem.name);
  const [editedCalories, setEditedCalories] = useState(foodItem.calories);

  const handleEditFood = () => {
    // Validate inputs
    if (!editedName || !editedCalories) {
      alert('Please enter both edited name and calories.');
      return;
    }

    // Create an edited food item
    const editedFoodItem = {
      ...foodItem,
      name: editedName,
      calories: parseInt(editedCalories, 10),
    };

    // Notify parent component about the edited food item
    onEdit(editedFoodItem);
  };

  return (
    <div>
      <h2>Edit Food Item</h2>
      <form>
        <label>
          Edited Name:
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        </label>
        <label>
          Edited Calories:
          <input
            type="number"
            value={editedCalories}
            onChange={(e) => setEditedCalories(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleEditFood}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditFoodForm;
