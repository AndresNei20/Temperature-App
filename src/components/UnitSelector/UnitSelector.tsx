import React, { useState } from "react";

interface UnitSelectorProps {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const UnitSelector: React.FC<UnitSelectorProps> = ({ handleChange }) => {
  const [unit, setUnit] = useState<string>("");

  const handleLocalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(event.target.value);
    handleChange(event);
  };

  return (
    <div>
      <select id="unit-selector" value={unit} onChange={handleLocalChange}>
        <option value="" disabled>Please choose an option</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Celsius">Celsius</option>
        <option value="Kelvin">Kelvin</option>
      </select>
    </div>
  );
};
