import React, { useState } from "react";

interface UnitSelectorProps {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
}

export const UnitSelector: React.FC<UnitSelectorProps> = ({
  handleChange,
  placeholder,
}) => {
  const [unit, setUnit] = useState<string>("");

  const handleLocalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(event.target.value);
    handleChange(event);
  };

  return (
    <div className="relative w-36 mx-3 ">
      <select
        id="unit-selector"
        value={unit}
        onChange={handleLocalChange}
        className="appearance-none bg-transparent rounded-md w-full h-11 p-2 border-2 border-neutral-200 pr-10 "
        name={placeholder} // Espacio para la flecha
      >
        {unit === "" && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        <option className="bg-transparent text-neutral-950" value="Fahrenheit">
          Fahrenheit
        </option>
        <option className="bg-transparent text-neutral-950" value="Celsius">
          Celsius
        </option>
        <option className="bg-transparent text-neutral-950" value="Kelvin">
          Kelvin
        </option>
      </select>
      {/* Custom Arrow */}
      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2">
        <svg
          className="w-4 h-4 text-neutral-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};
