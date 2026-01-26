import React, { useState } from 'react';

export default function SearchBar() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="search-section">
      {/* Search Input and Filter */}
      <div className="search-row">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search opportunities or companies..." 
        />
        <select className="filter-select">
          <option>All Types</option>
          <option>Full-time</option>
          <option>Internship</option>
        </select>
      </div>

      {/* Toggle Switch */}
      <div className="toggle-row">
        <label className="switch">
          <input 
            type="checkbox" 
            checked={isToggled} 
            onChange={() => setIsToggled(!isToggled)} 
          />
          <span className="slider"></span>
        </label>
        <span>Show only opportunities reserved for women</span>
      </div>
    </div>
  );
}