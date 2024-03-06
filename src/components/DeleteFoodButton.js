// src/components/DeleteFoodButton.js
import React from 'react';

const DeleteFoodButton = ({ onDelete }) => {
  const handleDeleteFood = () => {
    // Confirm deletion with the user
    if (window.confirm('Are you sure you want to delete this food item?')) {
      onDelete();
    }
  };

  return (
    <button type="button" onClick={handleDeleteFood}>
      Delete
    </button>
  );
};

export default DeleteFoodButton;
