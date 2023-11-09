
// import React from 'react';
// import Square from './Square';

// function Board(props) {
//   function renderSquare(i) {
//     return (
//       <Square
//         value={props.squares[i]}
//         onClick={() => props.onClick(i)}
//       />
//     );
//   }

 
//   const rows = [];
//   for (let row = 0; row < 3; row++) {
//     const rowSquares = [];
//     for (let col = 0; col < 3; col++) {
//       rowSquares.push(renderSquare(row * 3 + col));
//     }
//     rows.push(
//       <div key={row} className="board-row">
//         {rowSquares}
//       </div>
//     );
//   }

//   return (
//     <div>
//       {rows}
//     </div>
//   );
// }

// export default Board;


import React from 'react';
import Square from './Square';

function Board(props) {
  function renderSquare(i) {
    return (
      <Square
        key={i} // Añade una key única
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
