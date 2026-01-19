import { useEffect, useState } from "react";
import classes from './index.module.css'

function Square({ value, onClick, highlight }) {
  return (
    <button
      className={classes.square + (highlight ? " " + classes.highlight : "")}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  const [winningSquares, setWinningSquares] = useState([]);

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return { winner: squares[x], line: [x, y, z] };
      }
    }
    return null;
  }

  function handleClick(index) {
    if (getWinner(squares) || squares[index]) return;

    const updatedSquares = [...squares];
    updatedSquares[index] = isXTurn ? "X" : "O";
    setSquares(updatedSquares);
    setIsXTurn(!isXTurn);
  }

  function handleRestart() {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
    setWinningSquares([]);
    setStatus("");
  }

  useEffect(() => {
    const result = getWinner(squares);

    if (!result && squares.every((item) => item !== "")) {
      setStatus("This is a draw! Please restart the game");
      setWinningSquares([]);
    } else if (result) {
      setStatus(`Winner is ${result.winner}. Please restart the game`);
      setWinningSquares(result.line);
    } else {
      setStatus(`Player ${isXTurn ? "X" : "O"} turn`);
      setWinningSquares([]);
    }
  }, [squares, isXTurn]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.gameContainer}>
        <h1>Tic Tac Toe</h1>
        <div className={classes["tic-tac-toe-container"]}>
          {squares.map((value, index) => (
            <Square
              key={index}
              value={value}
              onClick={() => handleClick(index)}
              highlight={winningSquares.includes(index)}
            />
          ))}
        </div>
        <div className={classes.statusSection}>
          <h2>{status}</h2>
          <button onClick={handleRestart}>Restart</button>
        </div>
      </div>
    </div>
  );
}