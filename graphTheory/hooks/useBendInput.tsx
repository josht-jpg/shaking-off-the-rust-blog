import { useContext } from "react";
import MainSvgOffSetContext from "../contexts/MainSvgOffSet";
import getCoordinatesOfPath from "../utils/getCoordinates";

const useBendInput = () => {
  const mainSvgOffSet = useContext(MainSvgOffSetContext);

  const bendInput = (line, mouseEvent: MouseEvent) => {
    const { x1, y1, x2, y2 } = getCoordinatesOfPath(line.attr("d"));

    line.attr(
      "d",
      `M ${x1} ${y1} Q ${mouseEvent.clientX - mainSvgOffSet.x} ${
        mouseEvent.clientY
      } ${x2} ${y2}`
    );
  };
  return bendInput;
};

export default useBendInput;
