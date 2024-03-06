// src/components/SearchBar.js
import React, { useState, useEffect }  from 'react';
import foodDatabase from '../foodDatabase';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Use a timeout to simulate an API call delay (remove in a real-world scenario)
        const timeoutId = setTimeout(() => {
          const filteredResults = foodDatabase.filter(
            (food) =>
              food.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          onSearch(filteredResults);
        }, 300);

        // Clear the timeout on component unmount or when searchQuery changes
        return () => clearTimeout(timeoutId);
  }, [searchQuery, onSearch]);

  return (
    <div>
      <input 
         type="text"
         placeholder="Search for food..."
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* Additional search bar UI or functionality can be added here */}
    </div>
  );
};

export default SearchBar;