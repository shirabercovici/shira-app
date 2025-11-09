"use client";

import { useState, ReactNode } from 'react';
import styles from './page.module.css';

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
  disabled?: boolean;
  isWinning?: boolean;
  winner?: string | null;
  nextPlayer?: 'X' | 'O' | null;
  gameFinished?: boolean;
  isLastMove?: boolean;
};

function Square({ value, onSquareClick, disabled, isWinning, winner, nextPlayer, gameFinished, isLastMove }: SquareProps) {
  // Build class names: base square + player color + winning state + turn indicator
  let squareClass = styles.square;
  
  if (isWinning && winner) {
    // Winning squares get special styling based on winner
    squareClass += ` ${winner === 'X' ? styles.winningSquareX : styles.winningSquareO}`;
  } else {
    // Non-winning squares get player color for text
    squareClass += value === 'X' ? ` ${styles.playerX}` : value === 'O' ? ` ${styles.playerO}` : '';
  }

  // Highlight the last move with a thicker, colored border.
  // This is checked separately to override other border styles if needed.
  if (isLastMove && value) {
    // Add the player's color class for the border and the thicker border style
    squareClass += value === 'X' ? ` ${styles.lastMoveX}` : ` ${styles.lastMoveO}`;
  }
  
  return ( 
    <button 
      className={squareClass}
      onClick={onSquareClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [lastMove, setLastMove] = useState<number | null>(null);

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares).winner) {
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
    setLastMove(i);
  }
  
  const winnerResult = calculateWinner(squares);
  const winner = winnerResult.winner;
  const winningLine = winnerResult.line;
  // Check for a draw: no winner and all squares are filled
  const isDraw = !winner && squares.every(square => square !== null);
  const gameFinished: boolean = !!winner || isDraw;

  let status: ReactNode; // Changed to ReactNode to support colored text
  if (winner) {
    status = (
      <>
        Winner: <span className={winner === 'X' ? styles.playerXText : styles.playerOText}>{winner}</span>
      </>
    );
  } else if (isDraw) {
    status = "Draw!";
  } else {
    status = (
      <>
        Next player: <span className={xIsNext ? styles.playerXText : styles.playerOText}>{xIsNext ? "X" : "O"}</span>
      </>
    );
  }

  function handlePlayAgain() {
    setSquares(Array(9).fill(null)); // Reset all squares to null
    setXIsNext(true); // 'X' starts the new game
    setLastMove(null); // Reset the last move
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
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} disabled={gameFinished} isWinning={winningLine?.includes(0)} winner={winner} nextPlayer={xIsNext ? 'X' : 'O'} gameFinished={gameFinished} isLastMove={lastMove === 0} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} disabled={gameFinished} isWinning={winningLine?.includes(1)} winner={winner} nextPlayer={xIsNext ? 'X' : 'O'} gameFinished={gameFinished} isLastMove={lastMove === 1} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} disabled={gameFinished} isWinning={winningLine?.includes(2)} winner={winner} nextPlayer={xIsNext ? 'X' : 'O'} gameFinished={gameFinished} isLastMove={lastMove === 2} />
          </div>
          <div className={styles.boardRow}>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} disabled={gameFinished} isWinning={winningLine?.includes(3)} winner={winner} nextPlayer={xIsNext ? 'X' : 'O'} gameFinished={gameFinished} isLastMove={lastMove === 3} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} disabled={gameFinished} isWinning={winningLine?.includes(4)} winner={winner} nextPlayer={xIsNext ? 'X' : 'O'} gameFinished={gameFinished} isLastMove={lastMove === 4} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} disabled={gameFinished} isWinning={winningLine?.includes(5)} winner={winner} nextPlayer={xIsNext ? 'X' : 'O'} gameFinished={gameFinished} isLastMove={lastMove === 5} />
          </div>
          <div className={styles.boardRow}>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} disabled={gameFinished} isWinning={winningLine?.includes(6)} winner={winner} nextPlayer={xIsNext ? 'X' : 'O'} gameFinished={gameFinished} isLastMove={lastMove === 6} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} disabled={gameFinished} isWinning={winningLine?.includes(7)} winner={winner} nextPlayer={xIsNext ? 'X' : 'O'} gameFinished={gameFinished} isLastMove={lastMove === 7} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} disabled={gameFinished} isWinning={winningLine?.includes(8)} winner={winner} nextPlayer={xIsNext ? 'X' : 'O'} gameFinished={gameFinished} isLastMove={lastMove === 8} />
          </div>
        </div>

        {/* Conditionally render the Play Again button */}
        {(winner || isDraw) && (
          <button className={styles.playAgainButton} onClick={handlePlayAgain}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
              className={styles.reloadIcon}
            >
              <path d="M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z" />
            </svg>
             Play Again
          </button>
        )}

      </div> {/* End of gameWrapper */}
    </div> /* End of gameContainer */
  );
}


function calculateWinner(squares: (string | null)[]): { winner: string | null; line: number[] | null } {
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
      return { winner: squares[a], line: lines[i] };
    }
  }
  return { winner: null, line: null };
}
