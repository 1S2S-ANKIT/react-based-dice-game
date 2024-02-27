import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Rule from "./Rule";
import TotalScore from "./TotalScore";
import { useState } from "react";
import { Button } from "react-bootstrap";

function GamePlay() {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState();
    const [showrule, setShowrule] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const rollDice = () => {

        if (!selectedNumber) {
            setError("You have not selected a number")
            return;
        }
        setError("")
        const randomNumber = generateRandomNumber(1, 7);

        setCurrentDice((prev) => randomNumber);




        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber)
        }
        else {
            setScore((prev) => prev - 1)
        }

        setSelectedNumber(undefined);
    }

    const reset = () => {
        setScore(0);
    }

    return (
        <main>
            <div className="top_section">
                <TotalScore score={score} />
                <NumberSelector error={error}
                    selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
            </div>
            <RollDice currentDice={currentDice} rollDice={rollDice} />
            <div className="buttons">
                <Button variant="success" onClick={reset}>Reset</Button>
                <Button variant="dark" onClick={() => setShowrule(prev => !prev)}>{showrule ? "Hide" : "Show"} Rules</Button>
            </div>
            {showrule && <Rule />}
        </main>

    )
}

export default GamePlay;