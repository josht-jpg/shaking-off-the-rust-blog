import { STATE_NODE_RADIUS } from "../../constants/stateNodeConstants";

export const rotateD = (
  stateNodeInitialPosition,
  mouseEvent: React.MouseEvent<SVGCircleElement, MouseEvent>,
  stateNodeBoundingRect,
  groupTransform
) => {
  const REDUCE_MOVEMENT_Y = 4.5;
  const REDUCE_MOVEMENT_X = 7;
  return `M ${
    stateNodeInitialPosition.x -
    (stateNodeBoundingRect?.top + STATE_NODE_RADIUS - mouseEvent.clientY) /
      REDUCE_MOVEMENT_Y +
    (stateNodeBoundingRect?.left + STATE_NODE_RADIUS - mouseEvent.clientX) /
      REDUCE_MOVEMENT_X +
    STATE_NODE_RADIUS -
    document.getElementById("mainSVG").getBoundingClientRect().left -
    groupTransform.transformX
  }, ${stateNodeInitialPosition.y - groupTransform.transformY}
a ${STATE_NODE_RADIUS},${STATE_NODE_RADIUS} 0 1,0 ${
    STATE_NODE_RADIUS * -1
  },${STATE_NODE_RADIUS}`;
};

export const rotateTransformOrigin = (
  stateNodeInitialPosition,
  groupTransform
) =>
  `${
    stateNodeInitialPosition.x +
    STATE_NODE_RADIUS -
    document.getElementById("mainSVG").getBoundingClientRect().left -
    groupTransform.transformX
  }px ${
    stateNodeInitialPosition.y + STATE_NODE_RADIUS - groupTransform.transformY
  }px`;

export const rotateTransform = (
  mouseEvent: React.MouseEvent<SVGCircleElement, MouseEvent>,
  stateNodeBoundingRect
) => {
  const NIGHTY_DEGREES = 90;
  return `rotate(${
    NIGHTY_DEGREES *
    Math.sin(
      (-Math.PI *
        (stateNodeBoundingRect?.top + STATE_NODE_RADIUS - mouseEvent.clientY)) /
        (2 * STATE_NODE_RADIUS) +
        Math.PI +
        (Math.PI *
          (stateNodeBoundingRect?.left -
            mouseEvent.clientX +
            STATE_NODE_RADIUS)) /
          (2 * STATE_NODE_RADIUS)
    )
  })`;
};
