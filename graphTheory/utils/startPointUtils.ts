import * as d3 from "d3";
import {
  INPUTS_LOCAL_STORAGE_KEY,
  TEXT_POSITION_CONSTANTS,
} from "../constants/inputConstants";
import getCoordinatesOfPath from "./getCoordinates";
import mainBoundingRect from "./mainBoundingRect";
import startInputId from "./startInputId";
import { STATE_NODE_RADIUS } from "../constants/stateNodeConstants";
import { START_POINT_STORAGE_KEY } from "../constants/startPointConstants";

export const getInitialPosition = (startStateIndex: number, position) => {
  const startStateBoundingRect = document
    .getElementById(`stateNode${startStateIndex}`)
    ?.getBoundingClientRect();

  const INITIAL_START_INPUT_LENGTH = 150;

  const initialCx =
    position?.cx ??
    startStateBoundingRect?.left -
      mainBoundingRect().left -
      INITIAL_START_INPUT_LENGTH -
      2;

  const initialCy =
    position?.cy ??
    startStateBoundingRect?.y + STATE_NODE_RADIUS - mainBoundingRect().top;

  return { initialCx, initialCy };
};

export const saveStartPointPositionInStorage = (mouseEvent: MouseEvent) => {
  false &&
    localStorage.setItem(
      START_POINT_STORAGE_KEY,
      JSON.stringify({
        ...JSON.parse(localStorage.getItem(START_POINT_STORAGE_KEY)),
        position: {
          cx: mouseEvent.clientX - mainBoundingRect().left,
          cy: mouseEvent.clientY - mainBoundingRect().top,
        },
      })
    );
};

export const saveStartPointPositionAfterMovingState = (
  startStateIndex: number
) => {
  const startCircle = d3.select(`#lineStartTo${startStateIndex}Circle`);

  false &&
    localStorage.setItem(
      START_POINT_STORAGE_KEY,
      JSON.stringify({
        ...JSON.parse(localStorage.getItem(START_POINT_STORAGE_KEY)),
        position: {
          cx: startCircle.attr("cx"),
          cy: startCircle.attr("cy"),
        },
      })
    );
};

export const moveStartInput = (
  mouseEvent: MouseEvent,
  startStateIndex: number
) => {
  const startInput = d3.select(startInputId(startStateIndex));
  const startInputCoordinates = getCoordinatesOfPath(startInput.attr("d"));

  startInput.attr("d", startInputPath(mouseEvent, startInputCoordinates));
  moveStartInputText(mouseEvent, startInputCoordinates, startStateIndex);
};

export const saveStartInputPositionInStorage = (
  mouseEvent: MouseEvent,
  startStateIndex: number
) => {
  const startInputCoordinates = getCoordinatesOfPath(
    d3.select(startInputId(startStateIndex)).attr("d")
  );

  false &&
    localStorage.setItem(
      INPUTS_LOCAL_STORAGE_KEY,
      JSON.stringify(
        JSON.parse(localStorage.getItem(INPUTS_LOCAL_STORAGE_KEY)).map(
          (input) => {
            if (input.id.includes("Start")) {
              return {
                ...input,
                d: startInputPath(mouseEvent, startInputCoordinates),
              };
            } else {
              return input;
            }
          }
        )
      )
    );
};

const startInputPath = (mouseEvent: MouseEvent, startInputCoordinates) => {
  const { x2, y2, c1, c2 } = startInputCoordinates;

  return `M ${mouseEvent.clientX - mainBoundingRect().left} ${
    mouseEvent.clientY - mainBoundingRect().top
  } Q ${(c1 + mouseEvent.clientX - mainBoundingRect().left) / 2} ${
    (c2 + mouseEvent.clientY - mainBoundingRect().top) / 2
  } ${x2} ${y2}`;
};

const moveStartInputText = (
  mouseEvent: MouseEvent,
  startInputCoordinates,
  startStateIndex: number
) => {
  const { x2, y2, c1, c2 } = startInputCoordinates;

  const textX = (mouseEvent.clientX - mainBoundingRect().left + x2 + c1) / 3;
  const textY =
    (mouseEvent.clientY -
      mainBoundingRect().top +
      y2 +
      c2 * TEXT_POSITION_CONSTANTS.C2_MULTIPLIER) /
    TEXT_POSITION_CONSTANTS.Y_DIVISOR;

  document.getElementById(`lineStartTo${startStateIndex}Text`).style.left =
    (
      textX + document.getElementById("mainSVG").getBoundingClientRect().left
    ).toString() + "px";
  document.getElementById(`lineStartTo${startStateIndex}Text`).style.top =
    textY.toString() + "px";
};
