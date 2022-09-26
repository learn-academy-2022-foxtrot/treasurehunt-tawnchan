import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);
  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const handleGamePlay = (clickedSquare) => {
    console.log("treasureLocation:", treasureLocation);
    console.log("bombLocation:", bombLocation);
    let updateBoard = [...board];
    if (clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "💎";
      setBoard(updateBoard);
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💣";
      setBoard(updateBoard);
    } else {
      updateBoard[clickedSquare] = "🌴";
      setBoard(updateBoard);
    }
  };

  const handleReset = () => {
    setBoard(["?", "?", "?", "?", "?", "?", "?", "?", "?"]);
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setBombLocation(Math.floor(Math.random() * board.length));
  };

  console.log("treasureLocation:", treasureLocation);
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board-game">
        {board.map((square, index) => {
          return (
            <Square
              square={square}
              index={index}
              key={index}
              handleGamePlay={handleGamePlay}
            />
          );
        })}
      </div>
      <button onClick={handleReset}>Play Again</button>
    </>
  );
};

export default App;