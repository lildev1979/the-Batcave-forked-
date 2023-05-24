import { useEffect, useState } from "react";
import Cell from "./Cell";
import "./Board.css";

export default function Board({ maxX = 5, MaxY = 5 }) {
  const [game, setGame] = useState([[]]);
  const [isComplete, setisComplete] = useState(false);

  const [playerStats, setPlayerStats] = useState({ wins: 0, restarts: 0 });
  const activeChance = 0.2;
  function checkWin(board) {
    const isWin = board.every((row) => row.every((cell) => !cell));
    setisComplete(isWin);
    if (isWin) {
      setPlayerStats((prev) => ({
        ...playerStats,
        wins: playerStats.wins + 1,
      }));
    }
    console.log(isWin);
  }

  function handleClick(x, y) {
    let copyBoard = [...game];
    copyBoard[y][x] = !copyBoard[y][x];
    if (y > 0) {
      copyBoard[y - 1][x] = !copyBoard[y - 1][x];
    }
    if (y < MaxY - 1) {
      copyBoard[y + 1][x] = !copyBoard[y + 1][x];
    }
    if (x > 0) {
      copyBoard[y][x - 1] = !copyBoard[y][x - 1];
    }
    if (x < maxX - 1) {
      copyBoard[y][x + 1] = !copyBoard[y][x + 1];
    }

    setGame(copyBoard);
    checkWin(copyBoard);
    //go and toggle the cross
  }
  function handleRestart() {
    resetBoard();
    setisComplete(false);
  }
  const resetBoard = function () {
    let Board = [];
    for (let y = 0; y < MaxY; y++) {
      let row = [];
      for (let x = 0; x < maxX; x++) {
        row.push(Math.random() < activeChance);
      }
      Board.push(row);
    }
    setGame(Board);
  };
  useEffect(() => {
    resetBoard();
    console.log(game);
  }, []);
  if (!isComplete) {
    return (
      <div className="Board-Table">
        <h4 className="Board-Name">Lights Out</h4>
        <table className="Board-Table-Inner">
          {game.map((row, yidx) => {
            return (
              <tr key={`${yidx}`}>
                {row.map((cell, xidx) => {
                  return (
                    <td key={`${yidx}-${xidx}`}>
                      <Cell
                        isActive={cell}
                        handleClick={handleClick}
                        locationX={xidx}
                        locationY={yidx}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </table>
        <button className="Board-Shuffle" onClick={handleRestart}>
          Shuffle
        </button>
      </div>
    );
  } else {
    return (
      <div className="Board-Table">
        <h4 className="Board-Name">Lights Out</h4>

        <h3>You Won!</h3>
        <button onClick={handleRestart}>Restart</button>
      </div>
    );
  }
}
