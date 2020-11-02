import "./App.css";
import React from "react";
import DropDownButton from "./components/DropDownButton";
import BMICalculatingForm from "./components/BMICalculatingForm";
import logo1 from "../src/body-scale.png"
import logo2 from "../src/logo2.png"

function App() {
  const [show, setShow] = React.useState(false);

  const [unit, setUnit] = React.useState("metric");

  return (
    <React.Fragment>
      <div className="App">
        <div className="big-logo">
          <img className="scale-logo" src={logo1} alt=""/>
          <img className="name-logo" src={logo2} alt=""/>
        </div>
        <DropDownButton onClick={() => setShow(show => !show)} />
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
