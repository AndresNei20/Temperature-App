import React from "react";

interface TempInputProps {
  tempValue: string;
  setTempValue: React.Dispatch<React.SetStateAction<string>>;
}

export const TempInput: React.FC<TempInputProps> = ({
  tempValue,
  setTempValue,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempValue(e.target.value);
  };

  return (
    <input
      className="bg-transparent border-2 p-2 rounded-xl w-20 mx-3"
      type="number"
      placeholder="0.00"
      value={tempValue}
      onChange={handleInputChange}
    ></input>
  );
};
