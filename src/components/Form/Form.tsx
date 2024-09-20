import React from "react";
import { TempInput } from "../TempInput/TempInput";
import { UnitSelector } from "../UnitSelector/UnitSelector";
import { useCalculateTemp } from "../../hooks/useCalculateTemp";

export const Form: React.FC = () => {

  const {        tempValue,
    setTempValue,
    inputUnit,
    outputUnit,
    convertedTempValue,
    handleSubmit,
    handleInputUnit,
    handleOutputUnit,
    buttonClass, } = useCalculateTemp();

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
