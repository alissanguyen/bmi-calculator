import logo from './logo.svg';
import './App.css';
import React from 'react';
import DropDownButton from './components/DropDownButton';
import DropDownComponents from './components/DropDownComponents';

function App() {

  const [show, setShow] = React.useState(false);

  const units = ["Metric (cm)", "Imperial (in)"]

  const UnitButton = () => {
    return (
      <div className="relative m-4">
        <DropDownButton onClick={() => setShow(show => !show)}/>
        {show && <DropDownComponents data={units}/>}
      </div>
    )
  }

  return (
    <React.Fragment>
    <div className="App">
      <UnitButton/>
    </div>
    </React.Fragment>
  );
}

export default App;
