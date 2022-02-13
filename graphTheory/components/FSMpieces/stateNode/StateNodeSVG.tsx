import Latex from "react-latex-next";
import removeWhiteSpace from "../../../utils/removeWhiteSpace";
import styles from "./StateNode.module.scss";

const StateNodeSVG = ({
  stateNodeRef,
  index,
  stateAttributes,
  stateSetters,
  styleProps,
  eventHandlers,
}) => {
  const BOX_SHADOW_SHAPE = "0 0 6px";

  const boxShadow =
    !!stateAttributes.outlineColor &&
    `${removeWhiteSpace(stateAttributes.outlineColor)} ${BOX_SHADOW_SHAPE}`;

  return (
    <circle
      ref={stateNodeRef}
      id={`stateNode${index}`}
      className={styles.stateNode}
      style={{
        ...styleProps,
        backgroundColor: removeWhiteSpace(stateAttributes.color),
        color: removeWhiteSpace(stateAttributes.textColor),
        boxShadow,
      }}
      onContextMenu={eventHandlers.handleRightClick}
      onMouseEnter={() => {
        stateSetters.setIsMouseOver(true);
        stateSetters.setMouseOverNode(index);
      }}
      onMouseLeave={() => {
        stateSetters.setMouseOverNode(undefined);
        stateSetters.setIsMouseOver(false);
        stateSetters.setIsCreatingSelfLoop(false);
      }}
      onDoubleClick={() => stateSetters.setIsFinalState((prev) => !prev)}
      onMouseMove={eventHandlers.rotateSelfLoop}
    >
      {stateAttributes.isFinalState && (
        <circle
          className={styles.finalState}
          style={{
            cursor: styleProps.cursor,
            boxShadow,
          }}
        />
      )}
      {!!stateAttributes.stateName && (
        <p>
          <strong>
            {!!stateAttributes.stateName && (
              <Latex>{stateAttributes.stateName}</Latex>
            )}
          </strong>
        </p>
      )}
    </circle>
  );
};

export default StateNodeSVG;

/*
  <StateNodeSVG
            stateNodeRef={ref}
            index={index}
            stateAttributes={stateAttributes.map((a) => a.value)}
            stateSetters={{
              setMouseOverNode,
              setIsMouseOver,
              setIsCreatingSelfLoop,
            }}
            styleProps={styleProps}
            eventHandlers={{ rotateSelfLoop, handleRightClick }}
          />
*/
