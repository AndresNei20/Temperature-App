import React, { useState } from "react";
import { TempInput } from "../TempInput/TempInput";
import { UnitSelector } from "../UnitSelector/UnitSelector";

export const Form: React.FC = () => {
  const [tempValue, setTempValue] = useState<string>("");
  const [inputUnit, setInputUnit] = useState<string>("")
  const [outputUnit, setOutputUnit] = useState<string>("")
  const [convertedTempValue, setConvertedTempValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = parseFloat(tempValue);
    if (isNaN(value)) {
      console.log("Invalid input value");
      return;
    }
    let result: number;
    if(inputUnit === "Fahrenheit" && outputUnit === "Celsius") {
      result = (value - 32) * 5/9;
    }else if(inputUnit === "Fahrenheit" && outputUnit === "Kelvin") {
      result = (value - 32) * 5/9 + 273.15;
    }else if(inputUnit === "Celsius" && outputUnit === "Fahrenheit") {
      result = (value * 9/5) + 32
    }else if(inputUnit === "Celsius" && outputUnit === "Kelvin") {
      result = (value + 273.15)
    }else if(inputUnit === "Kelvin" && outputUnit === "Fahrenheit") {
      result = (value - 273.15) * 9/5 + 32
    }else if(inputUnit === "Kelvin" && outputUnit === "Celsius") {
      result = (value - 273.15)
    }else {
      result = value
    }
    setConvertedTempValue(result.toFixed(2));
  }
  const handleInputUnit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputUnit(e.target.value)
    console.log("Input unit changed to: ", e.target.value);
  }

  const isButtonEnabled = tempValue !== "" && inputUnit !== "" && outputUnit !== "";

  const buttonClass = isButtonEnabled ? "bg-green-200" : "bg-neutral-600";

  const handleOutputUnit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOutputUnit(e.target.value)
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
        <UnitSelector handleChange={handleInputUnit} />
        <UnitSelector handleChange={handleOutputUnit} />
        <button className={buttonClass}>Submit</button>
      </div>
      <div>
        {convertedTempValue && (
          <p className="text-green-500">{tempValue} {inputUnit} is {convertedTempValue} {outputUnit}</p>
        )}
      </div>
    </form>
  );
};
