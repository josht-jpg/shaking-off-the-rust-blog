import { useContext, useEffect, useState } from "react";
import { STATE_NODE_RADIUS } from "../../constants/stateNodeConstants";
import { DARK_MODE_BACKGROUND } from "../../constants/styleConstants";
import { AnimateVerticesContext } from "../../contexts/AnimateVerticesContext";
import styles from "./PseudocodePanel.module.scss";

const PseudoCodePanel = ({ stateNodeBoundingRect, conditionMet }) => {
  const CONTAINER_WIDTH_IN_PX = 275;
  const ABOVE_MOUSE_CONTAINER_OFFSET = 100;
  const BELOW_MOUSE_CONTAINER_OFFSET = 240;

  const [color, setColor] = useState("white");

  useEffect(() => {
    setColor(conditionMet ? "green" : "red");
  }, [setColor]);

  const left =
    stateNodeBoundingRect.left - CONTAINER_WIDTH_IN_PX / 2 + STATE_NODE_RADIUS;
  const top = `calc(${stateNodeBoundingRect.top}px ${
    stateNodeBoundingRect.top > window.innerHeight / 2
      ? `- ${BELOW_MOUSE_CONTAINER_OFFSET}px`
      : `+ ${ABOVE_MOUSE_CONTAINER_OFFSET}px`
  })`;

  const { animationSpeed } = useContext(AnimateVerticesContext);

  return (
    <div
      className={styles.pseudoCodePanel}
      style={{
        backgroundColor: DARK_MODE_BACKGROUND,
        width: CONTAINER_WIDTH_IN_PX,
        left,
        top,
      }}
    >
      <div style={{ color, transition: `${animationSpeed}ms` }}>
        <strong>{isRegular}</strong>
      </div>
    </div>
  );
};

export default PseudoCodePanel;

const isRegular = (
  <>
    <p>{"k <- getVertexDegree(firstVertex)"}</p>
    <p>{"for (const v of this.adjacencyList) {"}</p>
    <p>{"  if (v.length !== k) {"}</p>
    <p>{"       return false;"}</p>
    <p>{" }"}</p>
    <p>{"return true;"}</p>
  </>
);
