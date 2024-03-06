// src/App.js
import React, { useState }  from 'react';
import SearchBar from './components/SearchBar';
import ResultsTable from './components/ResultsTable';
import AddFoodForm from './components/AddFoodForm';
import foodDatabase from './foodDatabase';


const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };
  
  const handleAddFood = (newFoodItem) => {
    // Update searchResults with the new food item
    setSearchResults([...searchResults, newFoodItem]);
  };

  const handleEditFood = (editedFoodItem) => {
    const updatedResults = searchResults.map((food) =>
      food.id === editedFoodItem.id ? editedFoodItem : food
    );
    setSearchResults(updatedResults);
  };

  const handleDeleteFood = (foodId) => {
    const updatedResults = searchResults.filter((food) => food.id !== foodId);
    setSearchResults(updatedResults);
  };

  return (
    <div>
      {/* Your main component code goes here */}

      <SearchBar onSearch={handleSearch} />
      <ResultsTable 
         searchResults={searchResults}
         onEdit={handleEditFood}
         onDelete={handleDeleteFood}
      />
      <AddFoodForm onAddFood={handleAddFood} />

    </div>
  );
};

export default App;
