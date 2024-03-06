// src/components/ResultsTable.js
import React from 'react';
import EditFoodForm from './EditFoodForm';
import DeleteFoodButton from './DeleteFoodButton';


const ResultsTable = ({ searchResults, onEdit, onDelete }) => {

  const [editItemId, setEditItemId] = useState(null);

  const handleEditClick = (id) => {
    setEditItemId(id);
  };

  const handleCancelEdit = () => {
    setEditItemId(null);
  };

  const handleSaveEdit = (id, updatedFood) => {
    // Implement logic to save the edited food item
    onEditFood(id, updatedFood);
    setEditItemId(null);
  };

  const handleDeleteClick = (id) => {
    // Implement logic to delete the food item
    onDeleteFood(id);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Food Item</th>
          <th>Calories</th>
          <th>Actions</th>
          {/* Add more columns as needed */}
        </tr>
      </thead>
      <tbody>
        {/* Render rows of results here */}
        {searchResults.map((food) => (
          <tr key={food.id}>
            <td>{editItemId === food.id ? (
              <input
                type="text"
                value={food.name}
                onChange={(e) => onEditFood(food.id, { ...food, name: e.target.value })}
              />
            ) : (
              food.name
            )}</td>
            <td>{editItemId === food.id ? (
              <input
                type="number"
                value={food.calories}
                onChange={(e) => onEditFood(food.id, { ...food, calories: parseInt(e.target.value, 10) })}
              />
            ) : (
              food.calories
            )}</td>
            <td>
              {editItemId === food.id ? (
                <>
                  <button onClick={() => handleSaveEdit(food.id, food)}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEditClick(food.id)}>Edit</button>
                  <button onClick={() => handleDeleteClick(food.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
