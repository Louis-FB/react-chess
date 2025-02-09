import { Coords } from "./classes";

// relative positions in which a piece may move, depending on type
export const movePatterns = [
  {
    type: "pawn",
    coords: [
      // down
      [new Coords(1, 0), new Coords(2, 0)],
      // down
      [new Coords(1, -1)],
      [new Coords(1, 1)],
    ],
  },
  {
    type: "whitePawn",
    coords: [
      [new Coords(-1, 0), new Coords(-2, 0)],
      [new Coords(-1, -1)],
      [new Coords(-1, 1)],
    ],
  },
  {
    type: "rook",
    coords: [
      [
        //down
        new Coords(1, 0),
        new Coords(2, 0),
        new Coords(3, 0),
        new Coords(4, 0),
        new Coords(5, 0),
        new Coords(6, 0),
        new Coords(7, 0),
      ],
      [
        // right
        new Coords(0, 1),
        new Coords(0, 2),
        new Coords(0, 3),
        new Coords(0, 4),
        new Coords(0, 5),
        new Coords(0, 6),
        new Coords(0, 7),
      ],
      [
        // down
        new Coords(-1, 0),
        new Coords(-2, 0),
        new Coords(-3, 0),
        new Coords(-4, 0),
        new Coords(-5, 0),
        new Coords(-6, 0),
        new Coords(-7, 0),
      ],
      [
        // left
        new Coords(0, -1),
        new Coords(0, -2),
        new Coords(0, -3),
        new Coords(0, -4),
        new Coords(0, -5),
        new Coords(0, -6),
        new Coords(0, -7),
      ],
    ],
  },
  {
    type: "knight",
    coords: [
      [new Coords(-2, 1)],
      [new Coords(-1, 2)],
      [new Coords(1, 2)],
      [new Coords(2, 1)],
      [new Coords(2, -1)],
      [new Coords(1, -2)],
      [new Coords(-1, -2)],
      [new Coords(-2, -1)],
    ],
  },
  {
    type: "bishop",
    coords: [
      [
        new Coords(-1, 1),
        new Coords(-2, 2),
        new Coords(-3, 3),
        new Coords(-4, 4),
        new Coords(-5, 5),
        new Coords(-6, 6),
        new Coords(-7, 7),
      ],
      [
        new Coords(1, 1),
        new Coords(2, 2),
        new Coords(3, 3),
        new Coords(4, 4),
        new Coords(5, 5),
        new Coords(6, 6),
        new Coords(7, 7),
      ],
      [
        new Coords(1, -1),
        new Coords(2, -2),
        new Coords(3, -3),
        new Coords(4, -4),
        new Coords(5, -5),
        new Coords(6, -6),
        new Coords(7, -7),
      ],
      [
        new Coords(-1, -1),
        new Coords(-2, -2),
        new Coords(-3, -3),
        new Coords(-4, -4),
        new Coords(-5, -5),
        new Coords(-6, -6),
        new Coords(-7, -7),
      ],
    ],
  },
  {
    type: "king",
    coords: [
      [new Coords(1, 0)],
      [new Coords(1, 1)],
      [new Coords(0, 1)],
      [new Coords(-1, 1)],
      [new Coords(-1, 0)],
      [new Coords(-1, -1)],
      [new Coords(0, -1)],
      [new Coords(1, -1)],
    ],
  },
  {
    type: "queen",
    coords: [
      // up
      [
        new Coords(1, 0),
        new Coords(2, 0),
        new Coords(3, 0),
        new Coords(4, 0),
        new Coords(5, 0),
        new Coords(6, 0),
        new Coords(7, 0),
      ],
      // right
      [
        new Coords(0, 1),
        new Coords(0, 2),
        new Coords(0, 3),
        new Coords(0, 4),
        new Coords(0, 5),
        new Coords(0, 6),
        new Coords(0, 7),
      ],
      // down
      [
        new Coords(-1, 0),
        new Coords(-2, 0),
        new Coords(-3, 0),
        new Coords(-4, 0),
        new Coords(-5, 0),
        new Coords(-6, 0),
        new Coords(-7, 0),
      ],
      // left
      [
        new Coords(0, -1),
        new Coords(0, -2),
        new Coords(0, -3),
        new Coords(0, -4),
        new Coords(0, -5),
        new Coords(0, -6),
        new Coords(0, -7),
      ],
      // up-right
      [
        new Coords(-1, 1),
        new Coords(-2, 2),
        new Coords(-3, 3),
        new Coords(-4, 4),
        new Coords(-5, 5),
        new Coords(-6, 6),
        new Coords(-7, 7),
      ],
      // down-right
      [
        new Coords(1, 1),
        new Coords(2, 2),
        new Coords(3, 3),
        new Coords(4, 4),
        new Coords(5, 5),
        new Coords(6, 6),
        new Coords(7, 7),
      ],
      // down-left
      [
        new Coords(1, -1),
        new Coords(2, -2),
        new Coords(3, -3),
        new Coords(4, -4),
        new Coords(5, -5),
        new Coords(6, -6),
        new Coords(7, -7),
      ],
      // // up-left
      [
        new Coords(-1, -1),
        new Coords(-2, -2),
        new Coords(-3, -3),
        new Coords(-4, -4),
        new Coords(-5, -5),
        new Coords(-6, -6),
        new Coords(-7, -7),
      ],
    ],
  },
];
