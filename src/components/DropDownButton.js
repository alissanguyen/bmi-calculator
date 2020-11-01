import React from 'react';

const buttonStyle = "bg-indigo-700 text-white py-3 px-5 rounded";

const DropDownButton = ({onClick}) => (
    <button className={buttonStyle} id="unit-button" onClick={onClick}> Choose your system of units </button>
)

export default DropDownButton;