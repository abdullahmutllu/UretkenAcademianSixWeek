import React, { useEffect, useState } from "react";
import "./excToKelvin.css";
function ExcToKelvin({ value }) {
  const [valueKelvin, setValueKelvin] = useState(0);
  useEffect(() => {
    const newValue = value * 1 + 273.15;
    setValueKelvin(newValue);
  }, [value]);
  return (
    <div className="container2">
      <p>kelvin : {valueKelvin}</p>
    </div>
  );
}

export default ExcToKelvin;
