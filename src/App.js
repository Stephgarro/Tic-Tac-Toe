
import React, { useState } from 'react';
import Board from './components/Board';
import './App.css';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');

  function handleClick(i) {
    const squaresCopy = squares.slice();
    if (calculateWinner(squaresCopy) || squaresCopy[i] || (!playerX && !playerO)) {
      return;
    }
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner === 'X' ? playerX : playerO}`
    : (playerX && playerO) ? `Next player: ${xIsNext ? 'X' : 'O'}` : 'Enter player names';

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  return (
    <div className="game">
      <div className="game-info">
        <input
          type="text"
          placeholder="Player X's name"
          value={playerX}
          onChange={(e) => setPlayerX(e.target.value)}
        />
        <input
          type="text"
          placeholder="Player O's name"
          value={playerO}
          onChange={(e) => setPlayerO(e.target.value)}
        />
      </div>
      <div className="game-board">
        <Board squares={squares} onClick={i => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  );
}

export default App;
