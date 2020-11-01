import React from 'react';

const liStyle = "p-3 border text-gray-700 hover:text-white hover:bg-indogo-700 cursor:pointer"
const DropDownComponents = ({data = []}) => (
    <div className="shadow h-auto w-30 absolute">
        <ul className="text-center">
            {data.map((item, i) => (
                <li key={i} className={liStyle}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
)

export default DropDownComponents;