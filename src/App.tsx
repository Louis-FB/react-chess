//import { useState } from "react";
import { useState } from "react";
import "./App.css";
import Board from "./Board";
import { PieceTypes, Colours, BoardRange } from "./data/types.ts";

class Coords {
  y: BoardRange;
  x: BoardRange;

  constructor(y: BoardRange, x: BoardRange) {
    this.y = y;
    this.x = x;
  }

  getX = (): number => {
    return this.x;
  };

  getY = (): number => {
    return this.y;
  };
}

class Piece {
  // private:
  type: PieceTypes;
  colour: Colours;
  coords: Coords;

  constructor(type: PieceTypes, colour: Colours, coords: Coords) {
    this.type = type;
    this.colour = colour;
    this.coords = coords;
  }

  getCoords(): Coords {
    return this.coords;
  }
}

// let piece: Piece = new Piece("knight", "white", new Coords(1, 2));

function App() {
  const [board, setBoard]: any[] = useState(
    new Array(8).fill(Array(8).fill(null))
  );

  function changeValue(id: number): void {
    console.log(board[1][1]);
  }

  return (
    <>
      <main>
        <Board squares={board} />
      </main>
    </>
  );
}

export default App;
