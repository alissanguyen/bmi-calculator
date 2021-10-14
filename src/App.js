import "./App.css";
import React from "react";
import DropDownButton from "./components/DropDownButton";
import BMICalculatingForm from "./components/BMICalculatingForm";

import { UnitOfMeasure } from "./constants";

function App() {
  const [show, setShow] = React.useState(false);

  const [unit, setUnit] = React.useState(UnitOfMeasure.METRIC);

  return (
    <React.Fragment>
      <div className="App">
        <p className="app-title">BMI Calculator</p>
        <DropDownButton onClick={() => setShow((show) => !show)} />
        {show && (
          <div id="components-box">
            <div className="unit">
              <button onClick={() => setUnit(UnitOfMeasure.METRIC)}>
                Metric (m, kg)
              </button>
            </div>
            <div>
              <button onClick={() => setUnit(UnitOfMeasure.IMPERIAL)}>
                Imperial (in, lb)
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        <BMICalculatingForm unit={unit} />
      </div>
    </React.Fragment>
  );
}

export default App;
