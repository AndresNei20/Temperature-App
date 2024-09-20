import React from "react";

interface TempInputProps {
    tempValue: string;
    setTempValue: React.Dispatch<React.SetStateAction<string>>;
}

export const TempInput: React.FC< TempInputProps> = ({ tempValue, setTempValue }) => {


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempValue(e.target.value);
  };

  return (
    <input
      type="number"
      placeholder="0.00"
      value={tempValue}
      onChange={handleInputChange}
    >
    </input>
  );
};
