//import { useState } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Board from "./Board";
//import { PieceTypes, Colours, BoardRange } from "./data/types.ts";
import { Coords, Piece } from "./data/classes";
import { Colours, PieceTypes } from "./data/types";

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

  // const initialiseBoard = () => {
  //   let newArray = new Array(8).fill(Array(8).fill(1));
  // };

  // useEffect(() => {
  //   //initialiseBoard();
  // });

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

    // remove
  };

  return (
    <>
      <main>
        <Board squares={board} />

        <button onClick={() => modifyBoard(new Coords(5, 5), new Coords(5, 6))}>
          TEST: add piece
        </button>
      </main>
    </>
  );
}

export default App;
