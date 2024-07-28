import { useState } from "react";
import "./App.css";
import Board from "./Board";
import { Coords, Piece } from "./data/classes";
import { Colours, PieceTypes } from "./data/types";
import { movePatterns } from "./data/moves";

interface SelectedPieceShape {
  coords: Coords | null;
  type: PieceTypes | null;
}

function App() {
  const [board, setBoard]: any[] = useState(
    new Array(8).fill(Array(8).fill(null))
  );

  const [turn, setTurn] = useState("black");
  const [selectedPiece, setSelectedPiece] = useState<SelectedPieceShape>({
    coords: null,
    type: null,
  });

  function fetchIcon(type: PieceTypes, colour: Colours) {
    if (colour === "white") {
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
    } else {
      switch (type) {
        case "rook":
          return "♜";
        case "knight":
          return "♞";
        case "bishop":
          return "♝";
        case "king":
          return "♚";
        case "queen":
          return "♛";
        case "pawn":
          return "♟︎";
        default:
          return "?";
      }
    }
  }

  const loadPiece = (type: PieceTypes, colour: Colours): Piece => {
    return new Piece(type, fetchIcon(type, colour), colour);
  };

  function handlePawnLogic(
    i: number,
    j: number,
    pattern: Coords[][],
    squareCoords: Coords
  ): boolean {
    if (!selectedPiece.coords) return false;

    const yTotal: number = pattern[i][j].getY() + selectedPiece?.coords?.y;
    const xTotal: number = pattern[i][j].getX() + selectedPiece?.coords?.x;

    if (squareCoords.getY() === yTotal && squareCoords.getX() == xTotal) {
      if (i === 0) {
        if (board[yTotal][xTotal]) {
          return false;
        }
        // if (j == 1 && board[selected.getY()][selected.getX()].moved == true) return false;
      } else if (i == 1 || i == 2) {
        if (board[yTotal][xTotal] == null) {
          return false;
        }
      }
    }

    return true;
  }

  // compare the coordinates of the current square and selected square with move patterns to check if selected can be moved to it
  function checkSquareValidity(squareCoords: Coords): boolean {
    // if no piece is selected, skip

    if (!selectedPiece.coords) return false;

    // if occupied by the same colour, skip
    if (board[squareCoords.getY()][squareCoords.getX()]?.getColour === turn)
      return false;

    // select move pattern with type of selected piece
    const valueAtSelection =
      board[selectedPiece.coords.getY()][selectedPiece.coords.getX()];

    const patternSearchQuery: any =
      valueAtSelection.getType() === "pawn" &&
      valueAtSelection.getColour() === "white"
        ? "whitePawn"
        : selectedPiece.type;

    const movePattern = movePatterns.find((x) => x.type === patternSearchQuery);
    if (!movePattern) {
      console.error("No move pattern found");
      return false;
    }

    // const currentType =
    //   board[selectedPiece?.coords?.getY()][
    //     selectedPiece?.coords?.getY()
    //   ]?.getType();

    for (let i: number = 0; i < movePattern.coords.length; ++i) {
      for (let j: number = 0; j < movePattern.coords[i].length; ++j) {
        const yTotal: number =
          movePattern.coords[i][j].getY() + selectedPiece.coords.getY();
        const xTotal: number =
          movePattern.coords[i][j].getX() + selectedPiece.coords.getX();

        // check if potential square is within bounds
        if (yTotal > 7 || yTotal < 0) continue;
        if (xTotal > 7 || xTotal < 0) continue;

        if (valueAtSelection.getType() === "pawn") {
          if (handlePawnLogic(i, j, movePattern.coords, squareCoords) === false)
            return false;
        }

        // check if square is within range of current element
        if (squareCoords.getY() === yTotal && squareCoords.getX() === xTotal) {
          const valueAtCurrentPattern = board[yTotal][xTotal];
          if (
            !valueAtCurrentPattern ||
            valueAtCurrentPattern?.getColour() !== turn
          )
            return true;
        }
        if (board[yTotal][xTotal] && valueAtSelection.getType() !== "knight")
          break;
      }
    }
    return false;
  }

  // set currently selected piece
  function handleSelect(newCoords: Coords) {
    const newSelection = board[newCoords.getY()][newCoords.getX()];

    if (!selectedPiece.coords) {
      // if square is empty, ignore
      if (!newSelection || newSelection.getColour() !== turn) return;

      setSelectedPiece({
        coords: newCoords,
        type: newSelection.getType(),
      });
    } else if (selectedPiece) {
      if (!newSelection || newSelection.getColour() !== turn) {
        checkSquareValidity(newCoords)
          ? handleMove(newCoords)
          : console.log("Invalid move");
        //handleMove(newCoords);
      }
      if (newSelection?.getColour() === turn) {
        setSelectedPiece({
          coords: newCoords,
          type: newSelection.getType(),
        });
        return;
      }
    } else {
      return;
    }
  }

  const toggleTurn = () => {
    turn === "white" ? setTurn("black") : setTurn("white");
  };

  const resetSelection = () => {
    setSelectedPiece({ coords: null, type: null });
  };

  const handleMove = (newCoords: Coords) => {
    setBoard((prev: any[]) => {
      const newBoard = prev.map((row: any[], rID: number) =>
        row.map((col: any, cID: number) => {
          if (!selectedPiece.coords) return;
          if (
            rID === selectedPiece.coords.y &&
            cID === selectedPiece.coords.x
          ) {
            return null;
          } else if (rID === newCoords.getY() && cID === newCoords.getX()) {
            return board[selectedPiece.coords.y][selectedPiece.coords.x];
          } else {
            return col;
          }
        })
      );
      return newBoard;
    });

    resetSelection();
    toggleTurn();
  };

  const initialiseBoard = () => {
    setBoard((prev: any[]) => {
      const newBoard = prev.map((row: any[], rID: number) =>
        row.map((col: any, cID: number) => {
          // if (rID === 4 && cID === 4) {
          //   return loadPiece("pawn", "black");
          // }

          if (rID === 0 || rID === 7) {
            const makeColour: Colours = rID === 0 ? "black" : "white";

            switch (cID) {
              case 0:
                return loadPiece("rook", makeColour);
              case 1:
                return loadPiece("knight", makeColour);
              case 2:
                return loadPiece("bishop", makeColour);
              case 3:
                return loadPiece("king", makeColour);
              case 4:
                return loadPiece("queen", makeColour);
              case 5:
                return loadPiece("bishop", makeColour);
              case 6:
                return loadPiece("knight", makeColour);
              case 7:
                return loadPiece("rook", makeColour);
              default:
                return;
            }
          } else if (rID === 1) {
            return loadPiece("pawn", "black");
          } else if (rID === 6) {
            return loadPiece("pawn", "white");
          } else {
            return;
          }
        })
      );
      return newBoard;
    });
    resetSelection();
  };

  useState(() => {
    initialiseBoard();
  });

  return (
    <>
      <main>
        <p>{`${turn.charAt(0).toUpperCase() + turn.slice(1)} turn`}</p>
        <p>
          {selectedPiece.coords !== null
            ? "Piece selected"
            : "Piece not selected"}
        </p>
        <Board
          squares={board}
          turn={turn}
          onSelect={handleSelect}
          onCheck={checkSquareValidity}
        />
        <button onClick={() => toggleTurn()} className="btn">
          Toggle turn
        </button>
        <button onClick={() => initialiseBoard()}>Reset board</button>
      </main>
    </>
  );
}

export default App;
