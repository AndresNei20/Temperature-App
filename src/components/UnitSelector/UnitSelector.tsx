import React, { useState } from "react";

export const UnitSelector: React.FC = () => {
  const [unit, setUnit] = useState<string>("Fahrenheit");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(event.target.value);
  };

  return (
    <div>
      <select id="unit-selector" value={unit} onChange={handleChange}>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Celsius">Celsius</option>
        <option value="Kelvin">Kelvin</option>
      </select>
    </div>
  );
};
