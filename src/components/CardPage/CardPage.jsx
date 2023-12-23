import React, { useState } from "react";
import ExcFahrenheit from "../ExcFahrenheit/ExcFahrenheit";
import ExcToKelvin from "../ExcToKelvin/ExcToKelvin";
import "./CardPage.css";
function CardPage() {
  const [value, setValue] = useState("0");
  const [inputValue, setInputValue] = useState("");
  const changeInput = () => {
    setValue(inputValue);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="Container">
      <h1>°C To kelvin and Fahrenheit</h1>
      <p>Enter the value you want to convert : </p>
      <input className="nptValue" type="number" value={inputValue ? inputValue : 0} onChange={handleInputChange} />
      <button className="btn" onClick={changeInput}>
        Exchange
      </button>
      <div className="valueObje">
        <ExcFahrenheit value={value} />
        <ExcToKelvin value={value} />
      </div>
    </div>
  );
}

export default CardPage;
