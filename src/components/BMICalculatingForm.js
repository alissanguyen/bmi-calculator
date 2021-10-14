import React from "react";
import icon from "../components/slim.png";
import { indicators, UnitOfMeasure } from "../constants";

const calculateIndicatorString = (bmi) => {
  if (bmi < 18.5 && bmi > 14) {
    return indicators[0];
  } else if (bmi < 24.9 && bmi >= 18.5) {
    return indicators[1];
  } else if (bmi < 29.9 && bmi >= 24.9) {
    return indicators[2];
  } else if (bmi < 34.9 && bmi >= 29.9) {
    return indicators[3];
  } else if (bmi < 39.9 && bmi >= 34.9) {
    return indicators[4];
  } else if (bmi < 60 && bmi >= 39.9) {
    return indicators[5];
  } else {
    return indicators[6];
  }
};

const calculateBMI = (unit, weight, height) => {
  if (unit === UnitOfMeasure.METRIC) {
    return weight / height ** 2;
  } else {
    return 703 * (weight / height ** 2);
  }
};

const BMICalculatingForm = (props) => {
  const [height, setHeight] = React.useState();

  const [weight, setWeight] = React.useState();

  const [showResult, setShowResult] = React.useState(false);

  const heightUnit = props.unit === UnitOfMeasure.METRIC ? "m" : "in";
  const weightUnit = props.unit === UnitOfMeasure.METRIC ? "kg" : "lb";

  const BMI = calculateBMI(props.unit, weight, height);

  const whatItMeans = calculateIndicatorString(BMI);

  return (
    <React.Fragment>
      <form
        className="calculate-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <input
            placeholder="Enter your height"
            onChange={(e) => setHeight(e.target.value)}
          ></input>
          <label>{heightUnit}</label>
        </div>
        <div>
          <input
            placeholder="Enter your weight"
            onChange={(e) => setWeight(e.target.value)}
          ></input>
          <label>{weightUnit}</label>
        </div>
        {BMI ? (
          <React.Fragment>
            <p>Your BMI is {BMI}</p>
            <button
              onClick={() => {
                setShowResult((result) => !result);
              }}
            >
              What it means ➜
            </button>
          </React.Fragment>
        ) : null}
      </form>
      {showResult && (
        <div className="result-card">
          <img
            src={icon}
            className="result-card-image"
            id="result-icon"
            alt=""
          ></img>
          <p>{whatItMeans}</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default BMICalculatingForm;
