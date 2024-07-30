import { Colours } from "./data/types";
import PieceIndicator from "./PieceIndicator";

interface PropsData {
  pieces: any;
  colour: Colours;
  onIcon: Function;
}

function fetchCount(type: string, count: number): number {
  let total = 0;
  switch (type) {
    case "rook":
      total = 2 - count;
      break;
    case "knight":
      total = 2 - count;
      break;
    case "bishop":
      total = 2 - count;
      break;
    case "king":
      total = 1 - count;
      break;
    case "queen":
      total = 1 - count;
      break;
    case "pawn":
      total = 8 - count;
      break;
  }

  return total;
}

export default function GameInfo(props: PropsData) {
  //console.log(props.pieces);

  return (
    <div className="piece-count-container">
      <PieceIndicator
        type={"rook"}
        count={fetchCount("rook", props?.pieces?.rook)}
        colour={props.colour}
        onIcon={props.onIcon}
      />
      <PieceIndicator
        type={"knight"}
        count={fetchCount("knight", props?.pieces?.knight)}
        colour={props.colour}
        onIcon={props.onIcon}
      />
      <PieceIndicator
        type={"bishop"}
        count={fetchCount("bishop", props?.pieces?.bishop)}
        colour={props.colour}
        onIcon={props.onIcon}
      />
      <PieceIndicator
        type={"king"}
        count={fetchCount("king", props?.pieces?.king)}
        colour={props.colour}
        onIcon={props.onIcon}
      />
      <PieceIndicator
        type={"queen"}
        count={fetchCount("queen", props?.pieces?.queen)}
        colour={props.colour}
        onIcon={props.onIcon}
      />
      <PieceIndicator
        type={"pawn"}
        count={fetchCount("pawn", props?.pieces?.pawn)}
        colour={props.colour}
        onIcon={props.onIcon}
      />
    </div>
  );
}
