import React, { useState, useEffect } from "react";
import "./excFahrenheit.css";
function ExcFahrenheit({ value }) {
  const [valueFahrenheit, setValueFahrenheit] = useState(0);

  useEffect(() => {
    const newValue = (value * 9) / 5 + 32;
    setValueFahrenheit(newValue);
  }, [value]);

  return (
    <div className="container">
      <p>Fahrenheit : {valueFahrenheit}</p>
    </div>
  );
}

export default ExcFahrenheit;
