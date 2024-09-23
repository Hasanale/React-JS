import React, { useState } from "react";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { CalculateProvider } from "./contexts/CalculateContext";

function Calculator() {
  const [display, setdisplay] = useState("");
  const ValueBack = () => {
    setdisplay(display.slice(0, -1));
  };
  const ValueClear = () => {
    setdisplay("");
  };
  const ValueDisplay = (e) => {
    const buttonValue = e.target.name;

    if (display === "error") {
      setdisplay(buttonValue);
    } else if (["+", "-", "/", "*", "%"].includes(buttonValue)) {
      if (["+", "-", "/", "*", "%"].includes(display.slice(-1))) {
        setdisplay(display.slice(0, -1) + buttonValue);
      } else {
        setdisplay(display + buttonValue);
      }
    } else if (buttonValue === "=") {
      const cal = display;

      try {
        const result = eval(cal);
        setdisplay(result.toString());
      } catch {
        setdisplay("error");
      }
    } else {
      setdisplay(display + buttonValue);
    }
  };

  return (
    <CalculateProvider value={{ ValueBack, ValueClear, ValueDisplay, display }}>
      <div className="bg-gray-900 mt-8 text-white w-80 mx-auto p-6 rounded-lg shadow-2xl">
        <Display />
        <ButtonContainer />
      </div>
    </CalculateProvider>
  );
}

export default Calculator;
