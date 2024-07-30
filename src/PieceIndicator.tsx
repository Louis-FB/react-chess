import { Colours } from "./data/types";

interface PropsInterface {
  type: string;
  count: number;
  colour: Colours;
  onIcon: Function;
}

export default function PieceIndicator(props: any) {
  function printIcons(type: string, count: number): string {
    let icons = "";
    for (let i = 0; i < count; ++i) {
      icons += props.onIcon(type, props.colour);
    }
    return icons;
  }

  return (
    <div className="sub-icon">
      {props.count ? printIcons(props.type, props.count) : ""}
    </div>
  );
}
