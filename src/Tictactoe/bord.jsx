import { useState } from "react";
import Square from "./square";

function Bord() {
    const [state, setState] = useState(Array(9).fill(null))

    const [isXturn, setIsXturn] = useState(true);
    

    const winFun = () => {


        const winnerPattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (const logic of winnerPattern) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                // console.log("winner is", state[a])
                return state[a]
            }
        }
        return false;

    }
    const winner = winFun()
    const clickHandler = (index) => {
        if(state[index] !== null) return; // agr specfic squre mein x,0 already filled hein matlab !== null hein to return nothing,
        const copyState = [...state]
        copyState[index] = isXturn ? "X" : "0";
        setState(copyState)
        setIsXturn(!isXturn)


    }
    const restartFun = () => {
        setState(Array(9).fill(null))
    }

    return (
        <div className="w-96 h-96 flex flex-col justify-center items-center">
            {(winner ? <><h1 className="text-2xl font-semibold">Winner is {winner}</h1> <button onClick={() => { restartFun() }} className="bg-cyan-500 text-black text-xl py-2 px-8 mt-4 font-semibold">Start Again</button> </> : <div>
                <h1 className="text-2xl font-semibold capitalize mb-4">Player {isXturn? "X": "0"} please move </h1>
                <div className="flex">
                    <Square onClick={() => clickHandler(0)} value={state[0]} />
                    <Square onClick={() => clickHandler(1)} value={state[1]} />
                    <Square onClick={() => clickHandler(2)} value={state[2]} />
                </div>
                <div className="flex">
                    <Square onClick={() => clickHandler(3)} value={state[3]} />
                    <Square onClick={() => clickHandler(4)} value={state[4]} />
                    <Square onClick={() => clickHandler(5)} value={state[5]} />
                </div>
                <div className="flex">
                    <Square onClick={() => clickHandler(6)} value={state[6]} />
                    <Square onClick={() => clickHandler(7)} value={state[7]} />
                    <Square onClick={() => clickHandler(8)} value={state[8]} />
                </div>
            </div>)}

        </div>
    );
}

export default Bord;