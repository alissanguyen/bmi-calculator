import React from "react";
import icon from "../components/slim.png";

const BMICalculatingForm = (props) => {
  const [height, setHeight] = React.useState();

  const [weight, setWeight] = React.useState();

  const [showResult, setShowResult] = React.useState(false);

  const indicators = [
    "You are underweight. You have a minimal health risk.",
    "You are normal weight. You have a minimal health risk.",
    "You are overweight. You have increased health risk.",
    "You are obese. You have a high health risk.",
    "You are severely obese. You have a very high health risk.",
    "You are morbidly obese. You have an extremely high health risk.",
    "Hmm.. Your BMI does not sound right. Please try again and make sure your inputs are correct.",
  ];

  const heightUnit = props.unit === "metric" ? "m" : "in";
  const weightUnit = props.unit === "metric" ? "kg" : "lbs";

  const BMI =
    props.unit === "metric"
      ? weight / height ** 2
      : 703 * (weight / height ** 2);

  const Result = () => {
    if (BMI < 18.5 && BMI > 14) {
      return <p>{indicators[0]}</p>;
    } else if (BMI < 24.9 && BMI >= 18.5) {
      return <p>{indicators[1]}</p>;
    } else if (BMI < 29.9 && BMI >= 24.9) {
      return <p>{indicators[2]}</p>;
    } else if (BMI < 34.9 && BMI >= 29.9) {
      return <p>{indicators[3]}</p>;
    } else if (BMI < 39.9 && BMI >= 34.9) {
      return <p>{indicators[4]}</p>;
    } else if (BMI < 60 && BMI >= 39.9) {
      return <p>{indicators[5]}</p>;
    } else {
      return <p>{indicators[6]}</p>;
    }
  };

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
              onClick={(e) => {
                e.preventDefault();
                setShowResult(result => !result);
              }}
            >
              What it means ➜
            </button>
          </React.Fragment>
        ) : (
          ""
        )}
      </form>
      {showResult && (
        <div className="result-card">
          <img src={icon} className="result-card-image" id="result-icon" alt=""></img>
          <Result />
        </div>
      )}
    </React.Fragment>
  );
};

export default BMICalculatingForm;
