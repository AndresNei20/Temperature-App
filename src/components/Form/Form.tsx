import React, { useState } from "react";
import { TempInput } from "../TempInput/TempInput";
import { UnitSelector } from "../UnitSelector/UnitSelector";

export const Form: React.FC = () => {
  const [tempValue, setTempValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with value: ", tempValue);
  };

  const handleInputUnit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Input unit changed to: ", e.target.value);
  }

  const handleOutputUnit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Output unit changed to: ", e.target.value)
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Temperature Converter</h2>
        <p>Enter the temperature, select unit and submit</p>
      </div>
      <div className="flex flex-row">
        <TempInput tempValue={tempValue} setTempValue={setTempValue} />
        <UnitSelector />
        <UnitSelector />
        <button>Submit</button>
      </div>
    </form>
  );
};
