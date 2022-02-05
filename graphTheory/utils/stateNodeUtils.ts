import * as d3 from "d3";
import { GROUPS_LOCAL_STORAGE_KEY } from "../constants/groupsConstants";
import { TEXT_POSITION_CONSTANTS } from "../constants/inputConstants";
import { STATE_NODE_LOCAL_STORAGE_KEY } from "../constants/stateNodeConstants";
import getAllElementsByType from "./getAllElementsByType";
import getCoordinatesOfPath from "./getCoordinates";
import { isPathCurved } from "./inputUtils";

export const getPositionFromStorage = (stateIndex: number) => {
  const stateNode = getStateNodeByIndex(stateIndex);
  const initialX = stateNode?.initialX;
  const initialY = stateNode?.initialY;
  return { initialX, initialY };
};

export const getStateNodeBounding = (stateIndex: number) =>
  document.getElementById(`stateNode${stateIndex}`).getBoundingClientRect();

const getStateNodeByIndex = (index: number) =>
  JSON.parse(localStorage.getItem("stateNodes"))?.[index];

export const moveInputsConnectedToStateNode = (
  stateIndex: number,
  changeInX,
  changeInY
) => {
  getAllElementsByType("path").map((path: any) => {
    const pathCoordinates = getCoordinatesOfPath(path.getAttribute("d"));
    const pathId = path.getAttribute("id") ?? "";

    //TODO: make functions
    if (isOutGoingPath(pathId, stateIndex)) {
      moveOutGoingPath(path, pathCoordinates, changeInX, changeInY);
      moveInputText(path, pathCoordinates, changeInX, changeInY);
    } else if (isInComingPath(pathId, stateIndex)) {
      moveInComingPath(path, pathCoordinates, changeInX, changeInY);
      moveInputText(path, pathCoordinates, changeInX, changeInY);
    } else if (isPathStartInputConnetedToState(pathId, stateIndex)) {
      moveStartInput(stateIndex, pathCoordinates, changeInX, changeInY);
      moveStartPoint(path, changeInX, changeInY);
      moveInputText(path, pathCoordinates, changeInX, changeInY);
    }
  });
};

export const moveGroupConnectedToState = (
  stateIndex,
  initialStatePosition,
  changeInX,
  changeInY
) => {
  //TODO: check this - may mess up moving nodes
  getAllElementsByType("g").map((group: any) => {
    const isGroupConntectedToState =
      group.getAttribute("id") === `container${stateIndex}`;
    if (isGroupConntectedToState) {
      intializePositionIfUninitialized(stateIndex, initialStatePosition);
      moveGroup(stateIndex, group, initialStatePosition);
      moveAllTextInGroup(stateIndex, changeInX, changeInY);
    }
  });
};

const getVerticesFromPathId = (pathId: string) => {
  const vertices = pathId.match(/^\d+|\d+\b|\d+(?=\w)/g);
  const v1 = parseInt(vertices?.[0]);
  const v2 = parseInt(vertices?.[1]);
  return { v1, v2 };
};

const isOutGoingPath = (pathId: string, stateIndex: number) => {
  const { v1 } = getVerticesFromPathId(pathId);
  return v1 === stateIndex && !pathId.includes("Arrow");
};

const isInComingPath = (pathId: string, stateIndex: number) => {
  const { v2 } = getVerticesFromPathId(pathId);
  return (
    v2 === stateIndex && !pathId.includes("Start") && !pathId.includes("Arrow")
  );
};

const isPathStartInputConnetedToState = (pathId: string, stateIndex: number) =>
  pathId === `lineStartTo${stateIndex}Number`;

const moveOutGoingPath = (line, lineCoordinates, changeInX, changeInY) => {
  const { x1, x2, y1, y2, c1, c2 } = lineCoordinates;
  d3.select(`#${line.getAttribute("id")}`).attr(
    "d",
    `M ${x1 + changeInX} ${y1 + changeInY} Q ${c1} ${c2} ${x2} ${y2}`
  );
};

const moveInComingPath = (input, inputCoordinates, changeInX, changeInY) => {
  const { x1, x2, y1, y2, c1, c2 } = inputCoordinates;
  d3.select(`#${input.getAttribute("id")}`).attr(
    "d",
    `M ${x1} ${y1} Q ${c1} ${c2} ${x2 + changeInX} ${y2 + changeInY}`
  );
};

const moveStartInput = (
  stateIndex: number,
  inputCoordinates,
  changeInX,
  changeInY
) => {
  const { x1, x2, y1, y2, c1, c2 } = inputCoordinates;
  d3.select(`#lineStartTo${stateIndex}Number`).attr(
    "d",
    `M ${x1 + changeInX} ${y1 + changeInY} Q ${c1 + changeInX} ${
      c2 + changeInY
    } ${x2 + changeInX} ${y2 + changeInY}`
  );
};

const moveStartPoint = (path, changeInX, changeInY) => {
  const startCircle = d3.select(
    `#${path.getAttribute("id").replace("Number", "Circle")}`
  );

  startCircle
    .attr("cx", parseFloat(startCircle.attr("cx")) + changeInX)
    .attr("cy", parseFloat(startCircle.attr("cy")) + changeInY);
};

const moveInputText = (line, inputCoordinates, changeInX, changeInY) => {
  const newPosition = calculateNewTextPosition(
    inputCoordinates,
    changeInX,
    changeInY
  );

  const textId = line.getAttribute("id").replace("Number", "Text");
  const text = document.getElementById(textId);

  if (!!text) {
    text.style.left =
      (
        newPosition.x +
        document.getElementById("mainSVG").getBoundingClientRect().left
      ).toString() + "px";
    text.style.top = newPosition.y.toString() + "px";

    d3.select(`#${textId}`)
      .attr("top", newPosition.x)
      .attr("left", newPosition.y);
  }
};

const calculateNewTextPosition = (
  inputCoordinates,
  changeInX: number,
  changeInY: number
) => {
  const { x1, x2, y1, y2, c1, c2 } = inputCoordinates;
  const x = isPathCurved(x2, c1, y2, c2)
    ? (x1 + changeInX + x2 + c1) / 3
    : (x1 + changeInX + x2) / 2;
  const y = isPathCurved(x2, c1, y2, c2)
    ? (y1 + changeInY + y2 + c2 * TEXT_POSITION_CONSTANTS.C2_MULTIPLIER) /
      TEXT_POSITION_CONSTANTS.Y_DIVISOR
    : (y1 + changeInY + y2) / 2;

  return { x, y };
};

const intializePositionIfUninitialized = (
  stateIndex: number,
  initialStatePosition
) => {
  const stateNodeBoundingRect = getStateNodeBounding(stateIndex);

  if (!initialStatePosition.x) {
    initialStatePosition.setX(stateNodeBoundingRect.left);
    changeInitialXInStorage(stateIndex, stateNodeBoundingRect.left);
  }

  if (!initialStatePosition.y) {
    initialStatePosition.setY(stateNodeBoundingRect.top);
    changeInitialYInStorage(stateIndex, stateNodeBoundingRect.top);
  }
};

const changeInitialXInStorage = (stateIndex: number, initialX: number) =>
  changeAttributeInStorage(stateIndex, "initialX", initialX);

const changeInitialYInStorage = (stateIndex: number, initialY: number) =>
  changeAttributeInStorage(stateIndex, "initialY", initialY);

const changeAttributeInStorage = (
  changingStateIndex: number,
  attributeToChange: string,
  newValue: string | number
) =>
  localStorage.setItem(
    STATE_NODE_LOCAL_STORAGE_KEY,
    JSON.stringify(
      JSON.parse(localStorage.getItem(STATE_NODE_LOCAL_STORAGE_KEY)).map(
        (state, stateIndex) => {
          if (changingStateIndex === stateIndex) {
            return {
              ...state,
              [attributeToChange]: newValue,
            };
          } else {
            return state;
          }
        }
      )
    )
  );

const moveGroup = (stateIndex: number, group, initialStatePosition) => {
  const transform = calculateGroupTransform(stateIndex, initialStatePosition);
  d3.select(`#${group.getAttribute("id")}`).attr("transform", transform);
  changeGroupPositionInStorage(stateIndex, transform);
};

const calculateGroupTransform = (stateIndex: number, initialStatePosition) =>
  `translate(${
    document.getElementById(`stateNode${stateIndex}`).getBoundingClientRect()
      .left - initialStatePosition.x
  } ${
    document.getElementById(`stateNode${stateIndex}`).getBoundingClientRect()
      .top - initialStatePosition.y
  })`;

const changeGroupPositionInStorage = (stateIndex: number, transform: string) =>
  localStorage.setItem(
    GROUPS_LOCAL_STORAGE_KEY,
    JSON.stringify(
      JSON.parse(localStorage.getItem(GROUPS_LOCAL_STORAGE_KEY))?.map(
        (group) => {
          if (group.index === stateIndex) {
            return {
              ...group,
              transform,
            };
          } else {
            return group;
          }
        }
      )
    )
  );

const moveAllTextInGroup = (
  stateIndex: number,
  changeInX: number,
  changeInY: number
) => {
  const moveText = (text: HTMLElement) => {
    const left = `${changeInX + text.getBoundingClientRect().left}px`;
    const top = `${changeInY + parseFloat(text.style.top.split("px")[0])}px`;

    text.style.left = left;
    text.style.top = top;
  };

  getAllTextInGroup(stateIndex).map((text) => {
    moveText(text);
  });
};

const getAllTextInGroup = (stateIndex: number) =>
  Array.from(
    document.querySelectorAll(`*[id^=textselfLoopOnNode${stateIndex}]`)
  ) as HTMLElement[];

//TODO: should be a hook with mainSvgOffSetContext
export const saveNewStateNodeInStorage = (top: number, left: number) =>
  localStorage.setItem(
    STATE_NODE_LOCAL_STORAGE_KEY,
    JSON.stringify([
      ...(JSON.parse(localStorage.getItem(STATE_NODE_LOCAL_STORAGE_KEY)) ?? []),
      { x: left, y: top },
    ])
  );
