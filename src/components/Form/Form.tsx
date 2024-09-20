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
    <form className="border-2 p-12 rounded-xl" onSubmit={handleSubmit}>
      <div className="flex flex-col items-start m-3 py-3">
        <h1 className="py-3 font-semibold">Temperature Converter</h1>
        <p>Enter the temperature, select unit and submit</p>
      </div>
      <div className="flex flex-row">
        <TempInput tempValue={tempValue} setTempValue={setTempValue} />
        <UnitSelector handleChange={handleInputUnit} placeholder="From Unit" />
        <UnitSelector handleChange={handleOutputUnit} placeholder="To Unit" />
        <button className={buttonClass}>Convert</button>
      </div>
      <div className="flex flex-row">
        {convertedTempValue && (
          <p className="text-green-500 items-start m-3 pt-6">{tempValue} {inputUnit} is {convertedTempValue} {outputUnit}</p>
        )}
      </div>
    </form>
  );
};
