import React from "react";

const Filter = ({ onCategoryChange }) => {
  const categories = ["All", "Produce", "Dairy", "Meat", "Pantry"];

  return (
    <select onChange={(e) => onCategoryChange(e.target.value)}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Filter;