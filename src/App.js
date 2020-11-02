import "./App.css";
import React from "react";
import DropDownButton from "./components/DropDownButton";
import BMICalculatingForm from "./components/BMICalculatingForm";
import logo1 from "../src/body-scale.png";
import logo2 from "../src/logo2.png";
import { UnitOfMeasure } from "./constants";

function App() {
  const [show, setShow] = React.useState(false);

  const [unit, setUnit] = React.useState(UnitOfMeasure.METRIC);

  return (
    <React.Fragment>
      <div className="App">
        <div className="big-logo">
          <img className="scale-logo" src={logo1} alt="" />
          <img className="name-logo" src={logo2} alt="BMI-Calculator" />
        </div>
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
                Imperial (in, lbs)
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
