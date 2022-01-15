import { STATE_NODE_RADIUS } from "../constants/stateNodeConstants";

const drawCircleOutline = (x: number, y: number, groupTransform) => `M ${
  x +
  STATE_NODE_RADIUS -
  document.getElementById("mainSVG").getBoundingClientRect().left -
  groupTransform.transformX
}, ${y - groupTransform.transformY}
a ${STATE_NODE_RADIUS},${STATE_NODE_RADIUS} 0 1,0 ${STATE_NODE_RADIUS * -1},35`;

export default drawCircleOutline;
