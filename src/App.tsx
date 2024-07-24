import { useState } from "react";
import "./App.css";
import Board from "./Board";
import { Coords, Piece } from "./data/classes";
import { Colours, PieceTypes } from "./data/types";

interface SelectedPieceShape {
  coords: Coords | null;
  type: PieceTypes | null;
}

function App() {
  const [board, setBoard]: any[] = useState(
    new Array(8).fill(Array(8).fill(null))
  );

  // const setValue = () => {
  //   setBoard((prev: any[]) => {
  //     const newBoard = prev.map((row: any[], rID: number) =>
  //       row.map((col: any, cID: number) => (cID === 5 && rID === 5 ? "X" : col))
  //     );
  //     return newBoard;
  //   });
  // };

  const [turn, setTurn] = useState("black");
  const [selectedPiece, setSelectedPiece] = useState<SelectedPieceShape>({
    coords: null,
    type: null,
  });

  function fetchIcon(type: PieceTypes) {
    switch (type) {
      case "rook":
        return "♖";
      case "knight":
        return "♘";
      case "bishop":
        return "♗";
      case "king":
        return "♔";
      case "queen":
        return "♕";
      case "pawn":
        return "♙";
      default:
        return "?";
    }
  }

  const loadPiece = (
    type: PieceTypes,
    colour: Colours,
    y: number,
    x: number
  ): Piece => {
    return new Piece(type, fetchIcon(type), colour, new Coords(y, x));
  };

  function validateCoordinates(potentialCoords: Coords) {
    // deal with later
    const typeAtSquare =
      board[potentialCoords.getY()][potentialCoords.getX()].getType();
    const colourAtSquare =
      board[potentialCoords.getY()][potentialCoords.getX()].getColour();

    // compare potentialCoords (selected) with current coords (selectedPiece.coords)
  }

  // use both for marking squares and as a check before modifyBoard()
  function highlightMoves(thisSquareCoords: Coords) {
    // if piece is not selected, skip
    if (selectedPiece.coords === null || selectedPiece.type === null)
      return false;

    // if occupied by the same colour, skip
    if (
      board[thisSquareCoords.getY()][thisSquareCoords.getX()].getColour === turn
    )
      return false;

    const movePatterns = [
      { type: "pawn", coords: [new Coords(1, 0), new Coords(2, 0)] },
      { type: "rook", coords: [new Coords(2, 0), new Coords(3, 0)] },
    ];

    // select move pattern with type of current selection
    const movePattern = movePatterns.find(
      (x) => x.type === selectedPiece.type // if error because string != pieceType
    );

    if (!movePattern) return false;

    // or have the following as a separate shared function, used by this highlight function for each square, and to valid move square clicked.
    // function accepts desired coordinates as parameter, and has move patterns contained.
    for (let i: number = 0; i < movePattern.coords.length; ++i) {
      // only return true/ignore false
      // if typeMovePattern.coords is value relative to selected piece return true

      const yVal: number =
        movePattern.coords[i].getY() + selectedPiece.coords.getY();
      const xVal: number =
        movePattern.coords[i].getX() + selectedPiece.coords.getX();

      // check if potential square is within bounds
      if (yVal > 7 || yVal < 0) continue;
      if (xVal > 7 || xVal < 0) continue;

      const squareOnCurrentPattern =
        board[movePattern.coords[i].getY() + selectedPiece.coords.getY()][
          movePattern.coords[i].getX() + selectedPiece.coords.getX()
        ];

      // check if current square matches a pattern.
      if (
        squareOnCurrentPattern.getY() === thisSquareCoords.getY() &&
        squareOnCurrentPattern.getX() === thisSquareCoords.getX()
      ) {
        console.log("Within range");
        return true;
      }

      console.log(`value: ${squareOnCurrentPattern.getType()}`);
      console.log(
        `y: ${squareOnCurrentPattern.getY()} x: ${squareOnCurrentPattern.getX()}`
      );
    }

    // If loop fails to find the square within range, return false.
    return false;
  }

  // set currently selected piece
  function handleSelect(selectedColour: Colours, coords: Coords) {
    // check if the piece is right colour

    if (selectedColour !== turn) {
      console.log("Wrong colour");
      return;
    }
    // check if not empty
    else if (board[coords.getY()][coords.getX()] === null) {
      return;
    }

    console.log("Type value at coords: ");
    console.log(board[coords.getY()][coords.getX()].getType());

    setSelectedPiece({
      coords: coords,
      type: board[coords.getY()][coords.getX()].getType(),
    });

    console.log(selectedPiece); // not working
    // display available spaces (add "highlight" value to available squares)
  }

  const modifyBoard = (oldCoords: Coords, newCoords: Coords) => {
    setBoard((prev: any[]) => {
      const newBoard = prev.map((row: any[], xID: number) =>
        row.map((col: any, cID: number) => {
          if (xID === oldCoords.getX() && cID === oldCoords.getY()) {
            return null;
          } else if (cID === newCoords.getY() && xID === newCoords.getX()) {
            return loadPiece(
              "pawn",
              "white",
              newCoords.getY(),
              newCoords.getX()
            );
          } else {
            return col;
          }
        })
      );
      return newBoard;
    });

    turn === "white" ? setTurn("black") : setTurn("white");
    // remove
  };

  //const handleMove = () => {};

  return (
    <>
      <main>
        <p>{`${turn.charAt(0).toUpperCase() + turn.slice(1)} turn`}</p>
        <Board
          squares={board}
          turn={turn}
          onSelect={handleSelect}
          onHighlight={highlightMoves}
        />
        <button onClick={() => modifyBoard(new Coords(5, 5), new Coords(5, 6))}>
          TEST: add piece
        </button>
      </main>
    </>
  );
}

export default App;
