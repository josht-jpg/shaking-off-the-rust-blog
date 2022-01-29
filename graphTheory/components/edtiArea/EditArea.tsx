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
  example,
}) => {
  const [startIndex, _] = useContext(StartStateContext);

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
      <svg ref={mainSvgRef} id={`mainSVG`} className={styles.mainSVG} />

      {constructionInput}
      {createdInputIds.map(
        (id) =>
          !d3.select(id).empty() && <CreatedInput id={id} example={example} />
      )}
      {stateNodes.filter((n) => !!n)}
    </div>
  );
};

export default EditArea;
