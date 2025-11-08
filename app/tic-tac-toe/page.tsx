"use client";

import { useState } from 'react';
import styles from './page.module.css';

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

function Square({ value, onSquareClick }: SquareProps) {
  return ( 
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  
  const winner = calculateWinner(squares);
  // Check for a draw: no winner and all squares are filled
  const isDraw = !winner && squares.every(square => square !== null);

  let status: string; // Explicitly type status as string
  if (winner) {
    status = "Winner: " + winner;
  } else if (isDraw) {
    status = "Draw!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handlePlayAgain() {
    setSquares(Array(9).fill(null)); // Reset all squares to null
    setXIsNext(true); // 'X' starts the new game
  }

return (
    // This is the outer container for fullscreen centering
    <div className={styles.gameContainer}>
      
      {/* This is the new inner wrapper to prevent jiggling */}
      <div className={styles.gameWrapper}>
        <div>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h1>Let's play Tic-Tac-Toe!</h1>
        </div>
        <div className={styles.status}>{status}</div>
        <div className={styles.gameBoard}>
          <div className={styles.boardRow}>
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className={styles.boardRow}>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className={styles.boardRow}>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>

        {/* Conditionally render the Play Again button */}
        {(winner || isDraw) && (
          <button className={styles.playAgainButton} onClick={handlePlayAgain}>
            Play Again
          </button>
        )}

      </div> {/* End of gameWrapper */}
    </div> /* End of gameContainer */
  );
}

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
