import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import Draggable from "react-draggable";
import CreateInputContext from "../../../contexts/CreateInputContext";
import IsShiftKeyPressedContext from "../../../contexts/IsShiftKeyPressed";
import MouseOverNodeContext from "../../../contexts/MouseOverNodeContenxt";
import StateAttributes from "./stateAttributes/StateAttributes";
import styles from "./StateNode.module.scss";
import * as d3 from "d3";
import changeNodeInLocalStorage from "../../../utils/changeNodeInLocalStorage";
import Latex from "react-latex-next";
import preventHightlight from "../../../utils/preventHighlight";
import StartStateContext from "../../../contexts/StartStateContext";
import removeWhiteSpace from "../../../utils/removeWhiteSpace";
import getTransformCoordinates from "../../../utils/getTransformCoordinates";
import getCurrentSelfLoopIndex from "../../../utils/localStorage/getCurrentSelfLoopIndex";
import hideNodeInStorage from "../../../utils/localStorage/hideNodeInStorage";
import hideInputsConnectedToState from "../../../utils/hideInputsConnectedToState";
import addGroupToStorage from "../../../utils/localStorage/addGroupToStorage";
import createGroup from "../../../utils/createGroup";
import { STATE_NODE_RADIUS } from "../../../constants/stateNodeConstants";
import {
  rotateD,
  rotateTransform,
  rotateTransformOrigin,
} from "../../../utils/selfLoops/rotateUtils";
import SelfLoops from "./SelfLoops";
import TransformCoordinates from "../../../interfaces/transformCoordinates";
import LatexLabel from "../../LatexLabel";
import { AnimateVerticesContext } from "../../../contexts/AnimateVerticesContext";
import { PRIMARY_COLOR } from "../../../constants/styleConstants";
import PseudoCodePanel from "../../pseudoCode/PseudoCodePanel";
import G from "../../../adjacencyList";
import StateNodesContext from "../../../contexts/StateNodesContext";
import CreatedStateNode from "./CreatedStateNode";
import { LastDeletedVertexContext } from "../../../contexts/LastDeletedVertex";

const STATE_ATTRIBUTES = {
  stateName: "stateName",
  weight: "weight",
  color: "color",
  isFinalState: "isFinalState",
  textColor: "textColor",
  outlineColor: "outlineColor",
};

const HEIGHT_OFFEST = 10;

interface StateNodeProps {
  handleStartDragging: (event?: any) => void;
  handleStopDragging: (top?: number, left?: number) => void;
  savedAttributes?: any;
  isCreated: boolean;
  styleProps: any;
  index?: number;
}

const StateNode: React.FC<StateNodeProps> = ({
  handleStartDragging,
  handleStopDragging,
  savedAttributes,
  isCreated,
  styleProps,
  index,
}) => {
  const isShiftPressed = useContext(IsShiftKeyPressedContext);
  const setCreateInput = useContext(CreateInputContext);

  const [showDetails, setShowDetails] = useState(false);
  const handleRightClick = (e) => {
    if (isCreated) {
      e.preventDefault();
      setShowDetails(true);
    }
  };

  const ref = useRef(null);

  const [initialX, setInitialX] = useState<number | undefined>();
  const [initialY, setInitialY] = useState<number | undefined>();

  useEffect(() => {
    !initialX && setInitialX(ref.current?.getBoundingClientRect().left);
    !initialY && setInitialY(ref.current?.getBoundingClientRect().top);
  }, [ref]);

  const [groupTransform, setGroupTransform] = useState<TransformCoordinates>({
    transformX: 0,
    transformY: 0,
  });

  useEffect(() => {
    const group = JSON.parse(localStorage.getItem("groups"))?.find(
      (g) => g.index === index
    );
    setGroupTransform(getTransformCoordinates(group?.transform));
  }, [setGroupTransform]);

  const stateNodeInit = !!savedAttributes?.stateName
    ? savedAttributes.stateName
    : !!index || index === 0
    ? index.toString()
    : "";
  const [stateName, setStateName] = useState(stateNodeInit);
  const [weight, setWeight] = useState<number>();
  const [color, setColor] = useState(savedAttributes?.color ?? "");
  const [isFinalState, setIsFinalState] = useState(
    savedAttributes?.isFinalState ?? false
  );
  const [textColor, setTextColor] = useState(savedAttributes?.textColor ?? "");
  const [outlineColor, setOutlineColor] = useState(
    savedAttributes?.outlineColor ?? ""
  );

  const stateAttributes = [
    {
      value: stateName,
      setAttribute: setStateName,
      label: <LatexLabel labelType={"State"} />,
    },
    {
      value: weight,
      setAttribute: setWeight,
      label: "Weight",
    },
    {
      value: color,
      setAttribute: setColor,
      label: "Color",
    },
    {
      value: isFinalState,
      setAttribute: setIsFinalState,
      label: "Final State",
    },
    {
      value: isFinalState,
      setAttribute: setIsFinalState,
      label: "Final State",
    },
    { value: textColor, setAttribute: setTextColor, label: "Text Color" },
    {
      value: outlineColor,
      setAttribute: setOutlineColor,
      label: "Outline Color",
    },
  ];

  useEffect(() => {
    changeNodeInLocalStorage(STATE_ATTRIBUTES.stateName, stateName, index);
  }, [stateName]);

  useEffect(() => {
    changeNodeInLocalStorage(STATE_ATTRIBUTES.color, color, index);
  }, [color]);

  useEffect(() => {
    changeNodeInLocalStorage(
      STATE_ATTRIBUTES.isFinalState,
      isFinalState,
      index
    );
  }, [isFinalState]);

  useEffect(() => {
    changeNodeInLocalStorage(STATE_ATTRIBUTES.textColor, textColor, index);
  }, [textColor]);

  useEffect(() => {
    changeNodeInLocalStorage(
      STATE_ATTRIBUTES.outlineColor,
      outlineColor,
      index
    );
  }, [outlineColor]);

  const [_, setStartNodeIndex] = useContext(StartStateContext);

  const [stateNodes, setStateNodes] = useContext(StateNodesContext);
  const { setLastDeletedVertex } = useContext(LastDeletedVertexContext);
  //const { vertexPositions } = useContext(VertexPositionsContext);
  const handleDeleteState = () => {
    G.removeVertex(index);
    setShowDetails(false);

    hideNodeInStorage(index);
    hideInputsConnectedToState(index, () => setStartNodeIndex(undefined));

    setLastDeletedVertex(index);

    setStateNodes((prev) =>
      prev
        .filter((_, i) => i !== index)
        .map((vertex, i) => {
          if (i >= index) {
            return (
              <CreatedStateNode
                x={/*vertexPositions[index + 1].x*/ 0}
                y={/*vertexPositions[index + 1].y*/ 0}
                index={i}
                savedAttributes={vertex.props?.savedAttributes}
              />
            );
          } else {
            return vertex;
          }
        })
    );
  };

  const [isGroupCreated, setIsGroupCreated] = useState(false);

  useEffect(() => {
    const group = JSON.parse(localStorage.getItem("groups"))?.find(
      (g) => g.index === index
    );

    if (!group?.length) {
      addGroupToStorage(index);
    }

    if (!!index || index === 0) {
      createGroup(index, group?.transform);
      setIsGroupCreated(true);
    }
  }, [index, setIsGroupCreated]);

  const isCreatingSelfLoopState = useState(false);
  const [isCreatingSelfLoop, setIsCreatingSelfLoop] = isCreatingSelfLoopState;

  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseDown = (e: MouseEvent) => {
    if (isShiftPressed) {
      e.preventDefault();
      setCreateInput({
        x: ref.current?.getBoundingClientRect().left + STATE_NODE_RADIUS,
        y:
          ref.current?.getBoundingClientRect().top +
          STATE_NODE_RADIUS +
          HEIGHT_OFFEST,
        startNodeIndex: index,
      });
      setIsCreatingSelfLoop(true);
    }
  };

  const currentSelfLoopIndexState = useState(0); //should be called last created
  const [currentSelfLoopIndex, setCurrentSelfLoopIndex] =
    currentSelfLoopIndexState;
  useEffect(() => {
    setCurrentSelfLoopIndex(getCurrentSelfLoopIndex(index));
  }, [setCurrentSelfLoopIndex]);

  const rotateSelfLoop = (
    e: React.MouseEvent<SVGCircleElement, MouseEvent>
  ) => {
    if (
      isCreatingSelfLoop &&
      !d3.select(`#selfLoopOnNode${index}-${currentSelfLoopIndex}`).empty()
    ) {
      preventHightlight(e);

      d3.select(`#selfLoopOnNode${index}-${currentSelfLoopIndex}`)
        .attr(
          "d",
          rotateD(
            { x: initialX, y: initialY },
            e,
            ref.current?.getBoundingClientRect(),
            groupTransform
          )
        )
        .attr(
          "transform-origin",
          rotateTransformOrigin({ x: initialX, y: initialY }, groupTransform)
        )
        .attr(
          "transform",
          rotateTransform(e, ref.current?.getBoundingClientRect())
        );
    }
  };

  const setMouseOverNode = useContext(MouseOverNodeContext);

  const BOX_SHADOW_SHAPE = "0 0 6px";
  const coloredBoxShadow =
    outlineColor && `${removeWhiteSpace(outlineColor)} ${BOX_SHADOW_SHAPE}`;

  const {
    animateVertices,
    stopAnimationVertex,
    showPseudoCode,
    animationSpeed,
    animationColors,
  } = useContext(AnimateVerticesContext);

  const showCircleAnimation =
    animateVertices.includes(index) ||
    (index !== undefined && index === stopAnimationVertex);

  const animationCircleColorDefault =
    stopAnimationVertex === index ? "tomato" : PRIMARY_COLOR;
  const animationCircleColor = !!animationColors[index]
    ? animationColors[index]
    : animationCircleColorDefault;

  return (
    <>
      {showDetails && (
        <StateAttributes
          stateNodeBoundingRect={ref.current?.getBoundingClientRect()}
          index={index}
          stateAttributes={stateAttributes}
          handleClose={() => setShowDetails(false)}
          handleDeleteState={handleDeleteState}
        />
      )}

      {showCircleAnimation && showPseudoCode && (
        <PseudoCodePanel
          stateNodeBoundingRect={ref.current?.getBoundingClientRect()}
          conditionMet={animateVertices.includes(index)}
          // vertex={index}
        />
      )}

      <SelfLoops
        stateNode={{
          index,
          isMouseOver,
          initialX,
          initialY,
          boundingRect: ref.current?.getBoundingClientRect(),
        }}
        group={{ isCreated: isGroupCreated, transform: groupTransform }}
        isCreatingSelfLoopState={isCreatingSelfLoopState}
        currentSelfLoopIndexState={currentSelfLoopIndexState}
      />

      <Draggable
        onStart={handleStartDragging}
        onStop={() =>
          handleStopDragging(
            ref.current?.getBoundingClientRect().top,
            ref.current.getBoundingClientRect().left
          )
        }
        position={!isCreated && { x: 0, y: 0 }}
        disabled={isCreated && isShiftPressed}
        onMouseDown={handleMouseDown}
      >
        <circle
          ref={ref}
          id={`stateNode${index}`}
          className={styles.stateNode}
          style={{
            ...styleProps,
            backgroundColor: removeWhiteSpace(color),
            color: removeWhiteSpace(textColor),
            boxShadow: coloredBoxShadow,
          }}
          onContextMenu={handleRightClick}
          onMouseEnter={() => {
            setIsMouseOver(true);
            setMouseOverNode(index);
          }}
          onMouseLeave={() => {
            setMouseOverNode(undefined);
            setIsMouseOver(false);
            setIsCreatingSelfLoop(false);
          }}
          onDoubleClick={() => setIsFinalState((prev) => !prev)}
          onMouseMove={rotateSelfLoop}
        >
          <circle
            style={{
              borderRadius: "50%",
              boxSizing: "border-box",
              height: showCircleAnimation ? 2 * STATE_NODE_RADIUS : 0,
              width: showCircleAnimation ? 2 * STATE_NODE_RADIUS : 0,
              backgroundColor: animationCircleColor,
              position: "absolute",
              opacity: "0.5",
              marginLeft: showCircleAnimation ? -STATE_NODE_RADIUS : 0,
              marginTop: showCircleAnimation ? 0 : STATE_NODE_RADIUS,
              transition: `${800 - animationSpeed}ms`,
            }}
          />

          {isFinalState && (
            <circle
              className={styles.finalState}
              style={{
                cursor: styleProps.cursor,
                boxShadow: coloredBoxShadow,
              }}
            />
          )}
          {!!stateName && (
            <p style={{ opacity: 0.75 }}>
              <strong>
                <Latex>{stateName}</Latex>
              </strong>
            </p>
          )}
        </circle>
      </Draggable>
    </>
  );
};

export default StateNode;
