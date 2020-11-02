import "./App.css";
import React from "react";
import DropDownButton from "./components/DropDownButton";
import BMICalculatingForm from "./components/BMICalculatingForm";

function App() {
  const [show, setShow] = React.useState(false);

  const [unit, setUnit] = React.useState("metric");

  return (
    <React.Fragment>
      <div className="App">
        <DropDownButton onClick={() => setShow((show) => !show)} />
        {show && (
          <div id="components-box">
            <div className="unit">
              <button onClick={() => setUnit("metric")}>Metric (m, kg)</button>
            </div>
            <div>
              <button onClick={() => setUnit("imperial")}>Impertial (in, lbs)</button>
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
