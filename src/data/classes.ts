import { PieceTypes, Colours, BoardRange } from "./types.ts";

export class Coords {
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

export class Piece {
  type: PieceTypes;
  icon: string;
  colour: Colours;
  moved: boolean;

  constructor(type: PieceTypes, icon: string, colour: Colours) {
    this.type = type;
    this.icon = icon;
    this.colour = colour;
    this.moved = false;
  }

  getType(): PieceTypes {
    return this.type;
  }

  getIcon(): string {
    return this.icon;
  }

  getColour(): Colours {
    return this.colour;
  }

  setMoved(): void {
    this.moved = true;
  }

  getMoved(): boolean {
    return this.moved;
  }
}
