import { useState } from "react";
import Die from "./Die";

import "./RollDice.css";

function RollDice({ sides = ["one", "two", "three", "four", "five", "six"] }) {
    const [die1, setDie1] = useState("one");
    const [die2, setDie2] = useState("one");
    const [rolling, setRolling] = useState(false);

    const roll = () => {
        // Pick 2 new rolls
        const newDie1 = sides[Math.floor(Math.random() * sides.length)];
        const newDie2 = sides[Math.floor(Math.random() * sides.length)];

        // set state with new rolls
        setRolling(true);
        setDie1(newDie1);
        setDie2(newDie2);

        setTimeout(() => {
            setRolling(false);
        }, 1000);
    };

    return (
        <div className="RollDice">
            <div className="RollDice-container">
                <Die face={die1} rolling={rolling} />
                <Die face={die2} rolling={rolling} />
            </div>

            <button onClick={roll} disabled={rolling}>
                {rolling ? "Rolling ..." : "Roll Dice"}
            </button>
        </div>
    );
}

export default RollDice;
