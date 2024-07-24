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

  const [turn, setTurn] = useState("white");
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

  // function validateCoordinates(potentialCoords: Coords) {
  //   // deal with later
  //   const typeAtSquare =
  //     board[potentialCoords.getY()][potentialCoords.getX()].getType();
  //   const colourAtSquare =
  //     board[potentialCoords.getY()][potentialCoords.getX()].getColour();

  //   // compare potentialCoords (selected) with current coords (selectedPiece.coords)
  // }

  // compare the coordinates of the current square with move patterns to check if it can be moved to
  function checkSquareValidity(squareCoords: Coords): boolean {
    // console.log(
    //   `Square coords: ${squareCoords.getY()}, ${squareCoords.getX()}`
    // );

    // if no piece is selected, skip
    if (selectedPiece.coords === null || selectedPiece.type === null)
      return false;

    // if occupied by the same colour, skip
    if (board[squareCoords.getY()][squareCoords.getX()]?.getColour === turn)
      return false;

    // relative positions in which a piece may move, depending on type
    const movePatterns = [
      {
        type: "pawn",
        coords: [new Coords(1, 0), new Coords(2, 0), new Coords(1, -1)],
      },
      { type: "rook", coords: [new Coords(2, 0), new Coords(3, 0)] },
    ];

    // select move pattern with type of selected piece
    const movePattern = movePatterns.find((x) => x.type === selectedPiece.type);
    if (!movePattern) return false;

    // for
    for (let i: number = 0; i < movePattern.coords.length; ++i) {
      const yTotal: number =
        movePattern.coords[i].getY() + selectedPiece.coords.getY();
      const xTotal: number =
        movePattern.coords[i].getX() + selectedPiece.coords.getX();

      // check if potential square is within bounds
      if (yTotal > 7 || yTotal < 0) return false;
      if (xTotal > 7 || xTotal < 0) return false;

      // check if square is within range of current element
      if (squareCoords.getY() === yTotal && squareCoords.getX() === xTotal) {
        const valueAtCurrentPattern = board[yTotal][xTotal];
        if (
          valueAtCurrentPattern === null ||
          valueAtCurrentPattern?.getColour() !== turn
        )
          return true;
      }
    }
    return false;
  }

  // set currently selected piece
  function handleSelect(selectedColour: Colours, newCoords: Coords) {
    // console.log(`Selected colour ${selectedColour}, turn colour: ${turn}`);
    // console.log("Type value at coords: ");
    console.log(board[newCoords.getY()][newCoords.getX()]);

    const selectedSquare = board[newCoords.getY()][newCoords.getX()];

    if (selectedPiece.coords === null) {
      // if square is empty, ignore
      if (selectedSquare === null) return;

      // if piece is opposite colour, ignore
      if (selectedColour !== turn) return;

      setSelectedPiece({
        coords: newCoords,
        type: selectedSquare.getType(),
      });
    } else if (selectedPiece.coords) {
      if (selectedSquare === null || selectedColour !== turn) {
        console.log("Move to square");
      }
      if (selectedColour === turn) {
        console.log("Switch selection");
        setSelectedPiece({
          coords: newCoords,
          type: selectedSquare.getType(),
        });
      }
    }
  }

  const toggleTurn = () => {
    turn === "white" ? setTurn("black") : setTurn("white");
  };

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

    toggleTurn();
    // remove
  };

  return (
    <>
      <main>
        <p>{`${turn.charAt(0).toUpperCase() + turn.slice(1)} turn`}</p>
        <Board
          squares={board}
          turn={turn}
          onSelect={handleSelect}
          onCheck={checkSquareValidity}
        />
        <button
          onClick={() => modifyBoard(new Coords(4, 2), new Coords(4, 3))}
          className="btn"
        >
          TEST: add piece
        </button>
        <button onClick={() => toggleTurn()} className="btn">
          Toggle turn
        </button>
      </main>
    </>
  );
}

export default App;
