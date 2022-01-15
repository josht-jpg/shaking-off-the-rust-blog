import * as d3 from "d3";
import { useContext } from "react";
import StartStateContext from "../../contexts/StartStateContext";
import CreatedInput from "../FSMpieces/input/CreatedInput";
import StartPoint from "../FSMpieces/StartPoint";
import styles from "./EditArea.module.scss";

const EditArea = ({
  setIsMouseInEditArea,
  cursor,
  mainSvgRef,
  constructionInput,
  createdInputIds,
  stateNodes,
}) => {
  const [startIndex, _] = useContext(StartStateContext);

  const startPointPosition = () =>
    JSON.parse(localStorage.getItem("startPoint"))?.position;

  return (
    <div
      id="editArea"
      className={styles.editArea}
      onMouseOver={() => setIsMouseInEditArea(true)}
      onMouseOut={() => setIsMouseInEditArea(false)}
      style={{
        cursor,
      }}
    >
      <svg ref={mainSvgRef} id={`mainSVG`} className={styles.mainSVG}>
        {startIndex !== undefined && (
          <StartPoint position={startPointPosition()} />
        )}
      </svg>
      {constructionInput}
      {createdInputIds.map(
        (id) => !d3.select(id).empty() && <CreatedInput id={id} />
      )}
      {stateNodes.filter((n) => !!n)}
    </div>
  );
};

export default EditArea;
