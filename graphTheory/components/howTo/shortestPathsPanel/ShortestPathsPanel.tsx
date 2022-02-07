import { useContext, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { IsLightModeContext } from "../../../../context/IsLightModeProvider";
import { DARK_MODE_BACKGROUND } from "../../../constants/styleConstants";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";
import styles from "./ShortestPathsPanel.module.scss";

interface ShortestPathPanelProps {
  shortestPaths: number[];
  handleClose: () => void;
}

const ShortestPathPanel: React.FC<ShortestPathPanelProps> = ({
  shortestPaths,
  handleClose,
}) => {
  const [width, setWidth] = useState("0");

  useEffect(() => {
    setTimeout(() => setWidth("280px"), 1);
  }, []);

  const ref = useRef();
  useOutsideAlerter(ref, handleClose);

  const [isDragging, setIsDragging] = useState(false);

  const { isLightMode } = useContext(IsLightModeContext);

  return (
    <Draggable
      onMouseDown={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      <div
        ref={ref}
        className={styles.moreInfoPanel}
        style={{
          width,
          cursor: isDragging ? "grabbing" : "grab",
          boxShadow: !isLightMode && "white 0 0 5px",
          background: !isLightMode && DARK_MODE_BACKGROUND,
        }}
        //  onMouseUp={() => setIsDragging(false)}
      >
        <h3>{`Shortest Paths from node ${shortestPaths.findIndex(
          (p) => p === 0
        )}`}</h3>
        {shortestPaths.map((pathLength, vertex) => (
          <>
            <p>
              {`To vertex ${vertex}`}: <strong>{pathLength}</strong>
            </p>
            {vertex !== shortestPaths.length - 1 && <hr />}
          </>
        ))}
      </div>
    </Draggable>
  );
};

export default ShortestPathPanel;
