
import React from 'react';
import Square from './Square';

function Board(props) {
  function renderSquare(i) {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }

 
  const rows = [];
  for (let row = 0; row < 3; row++) {
    const rowSquares = [];
    for (let col = 0; col < 3; col++) {
      rowSquares.push(renderSquare(row * 3 + col));
    }
    rows.push(
      <div key={row} className="board-row">
        {rowSquares}
      </div>
    );
  }

  return (
    <div>
      {rows}
    </div>
  );
}

export default Board;
