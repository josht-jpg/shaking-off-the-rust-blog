import * as d3 from "d3";
import { STATE_NODE_RADIUS } from "../../constants/stateNodeConstants";
import shiftText from "../shiftText";

export const dragTransformOrigin = (
  initialStateX: number,
  intialStateY: number,
  groupTransform
) =>
  `${
    initialStateX +
    STATE_NODE_RADIUS -
    document.getElementById("mainSVG").getBoundingClientRect().left -
    groupTransform.transformX
  }px ${intialStateY + STATE_NODE_RADIUS - groupTransform.transformY}px`;

export const dragTransform = (e: MouseEvent, stateNodeBoundingRect) => {
  return `rotate(${
    360 *
    Math.sin(
      (-Math.PI *
        (stateNodeBoundingRect?.top +
          STATE_NODE_RADIUS -
          45 * (e.clientY / window.innerHeight))) /
        70 +
        Math.PI +
        (Math.PI *
          (stateNodeBoundingRect.left -
            45 * (e.clientX / window.innerWidth) +
            STATE_NODE_RADIUS)) /
          70
    )
  })`;
};

const updateSelfLoopPosition = (
  selfLoops,
  loopId: string,
  transformOrigin: string,
  transform: string
) =>
  selfLoops.map((loop) => {
    if (loop.id === loopId.replace("#", "")) {
      return {
        ...loop,
        transformOrigin,
        transform,
      };
    } else {
      return loop;
    }
  });

const moveSelfLoopText = (loopId: string) => {
  const { shiftX, shiftY } = shiftText(loopId);
  const selfLoopText = document.getElementById(
    "text" + loopId?.replace("#", "")
  );
  const selfLoopBoundingRect = document
    .getElementById(loopId?.replace("#", ""))
    ?.getBoundingClientRect();

  selfLoopText.style.left = `${selfLoopBoundingRect.left + shiftX}px`;
  selfLoopText.style.top = `${selfLoopBoundingRect.top + shiftY}px`;
};

const dragSelfLoop = (
  loopId: string,
  transform: string,
  transformOrigin: string,
  setSelfLoops
) => {
  d3.select(loopId)
    .attr("transform-origin", transformOrigin)
    .attr("transform", transform);

  const selfLoopTextExists = !!document.getElementById(
    "text" + loopId?.replace("#", "")
  );
  if (selfLoopTextExists) {
    moveSelfLoopText(loopId);
  }

  setSelfLoops((prev) =>
    updateSelfLoopPosition(prev, loopId, transformOrigin, transform)
  );
};

export default dragSelfLoop;
