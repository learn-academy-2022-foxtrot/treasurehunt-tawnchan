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

  const [counter, setCounter] = useState(5);
  const [youWinLose, setYouWinLose] = useState("");

  const handleGamePlay = (clickedSquare) => {
    console.log("treasureLocation:", treasureLocation);
    console.log("bombLocation:", bombLocation);
    let updateBoard = [...board];
    if (clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "đ";
      setYouWinLose("Great job you WIN đ");
      setBoard(updateBoard);
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "đŖ";
      setYouWinLose("Ouch, you LOSE âšī¸");
      setBoard(updateBoard);
    } else {
      updateBoard[clickedSquare] = "đ´";
      setBoard(updateBoard);
      runCounter(counter);
    }
  };

  const runCounter = () => {
    counter === 1 ? handleReset() : setCounter(counter - 1);
  };

  const handleReset = () => {
    setBoard(["?", "?", "?", "?", "?", "?", "?", "?", "?"]);
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setBombLocation(Math.floor(Math.random() * board.length));
    setCounter(5);
  };

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

      {!youWinLose ? (
        <div className="attCounter">Number of Attempts left : {counter}</div>
      ) : (
        <div className="attCounter">{youWinLose}</div>
      )}

      <div className="button-container-div" onClick={handleReset}>
        <button>Play Again</button>
      </div>
    </>
  );
};

export default App;