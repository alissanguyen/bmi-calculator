import React from "react";

const BMICalculatingForm = (props) => {

  const [height, setHeight] = React.useState();

  const [weight, setWeight] = React.useState();

  const heightUnit = (props.unit === "metric") ? "m" : "in"
  const weightUnit = (props.unit === "metric") ? "kg" : "lbs"

  const BMI = (props.unit === "metric") ? (weight / (height ** 2)) : (703 * (weight / (height ** 2)))
 

  return (
    <React.Fragment>
      <form
        className="calculate-form"
        onSubmit={(e) => {e.preventDefault()}}>
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
        {BMI ? <p>Your BMI is {BMI}</p> : ''}
      </form>
    </React.Fragment>
  );
};

export default BMICalculatingForm;
