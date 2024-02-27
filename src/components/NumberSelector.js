import { useState } from "react";

const NumberSelector = ({ error, selectedNumber, setSelectedNumber }) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    return (
        <div className="NumberSelectorContainer">
            <p className="error">{error}</p>
            <div className="Num_selector">

                {
                    arrNumber.map((value, i) => (
                        <h1 style={{ backgroundColor: value === selectedNumber ? "black" : "white", color: value === selectedNumber ? "white" : "black" }} key={i} onClick={() => setSelectedNumber(value)}>{value}</h1>
                    ))
                }
            </div>
            <p >Select Number</p>
        </div>

    )
}

export default NumberSelector;
