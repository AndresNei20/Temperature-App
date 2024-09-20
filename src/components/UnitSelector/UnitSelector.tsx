import React, { useState } from "react";

interface UnitSelectorProps {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string
}

export const UnitSelector: React.FC<UnitSelectorProps> = ({ handleChange, placeholder }) => {
  const [unit, setUnit] = useState<string>("");

  const handleLocalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(event.target.value);
    handleChange(event);
  };

  return (
    <div>
      <select id="unit-selector" value={unit} onChange={handleLocalChange} className="bg-transparent rounded-md w-30 h-11 p-2 mx-3 border-2 ">
        <option className="bg-neutral-200 text-neutral-950" value="" disabled>{placeholder}</option>
        <option className="bg-transparent text-neutral-950" value="Fahrenheit">Fahrenheit</option>
        <option className="bg-transparent text-neutral-950" value="Celsius">Celsius</option>
        <option className="bg-transparent text-neutral-950" value="Kelvin">Kelvin</option>
      </select>
    </div>
  );
};
