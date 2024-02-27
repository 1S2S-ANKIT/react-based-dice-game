// import { useState } from "react";

const RollDice = ({ currentDice, rollDice }) => {

    return (
        <div className="Dice_container">
            <div className="Dice" onClick={rollDice}>
                <img src={`/images/dice_${currentDice}.png`} alt="dice 1"></img>
            </div>
            <p> Click on Dice to roll</p>
        </div>
    )
}

export default RollDice