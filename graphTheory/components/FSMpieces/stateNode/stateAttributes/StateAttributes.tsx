import { useRef } from "react";
import useOutsideAlerter from "../../../../hooks/useOutsideAlerter";
import styles from "./StateAttributes.module.scss";
import DeleteButton from "../../../button/DeleteButton";
import CheckBoxField from "./checkBoxField/CheckBoxField";
import StartStateCheckBox from "./StartStateCheckBox";
import { STATE_NODE_RADIUS } from "../../../../constants/stateNodeConstants";

//Use generics for state attributes

interface StateDetailsProps {
  stateNodeBoundingRect;
  index: number;
  stateAttributes: any[];
  handleClose: () => void;
  handleDeleteState: () => void;
}

const StateAttributes: React.FC<StateDetailsProps> = ({
  stateNodeBoundingRect,
  index,
  stateAttributes,
  handleClose,
  handleDeleteState,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useOutsideAlerter(ref, handleClose);

  const CONTAINER_WIDTH_IN_PX = 275;
  const ABOVE_MOUSE_CONTAINER_OFFSET = 100;
  const BELOW_MOUSE_CONTAINER_OFFSET = 335;

  const left =
    stateNodeBoundingRect.left - CONTAINER_WIDTH_IN_PX / 2 + STATE_NODE_RADIUS;
  const top = `calc(${stateNodeBoundingRect.top}px ${
    stateNodeBoundingRect.top > window.innerHeight / 2
      ? `- ${BELOW_MOUSE_CONTAINER_OFFSET}px`
      : `+ ${ABOVE_MOUSE_CONTAINER_OFFSET}px`
  })`;

  const FINAL_STATE_LABEL = "Final State";
  const handleFinalStateToggle = (e: MouseEvent) => {
    e.preventDefault();
    stateAttributes
      .find((a) => a.label === FINAL_STATE_LABEL)
      .setAttribute((prev) => !prev);
  };

  const HEADER = "State Details";
  const HEADER_UNDERLINE_WIDTH = "50%";

  const DELETE_BUTTON_TEXT = "Delete Vertex";

  return (
    <div
      className={styles.stateDetails}
      ref={ref}
      style={{
        width: CONTAINER_WIDTH_IN_PX,
        left,
        top,
      }}
    >
      <h3 className={styles.stateDetailsHeader}>{HEADER}</h3>
      <hr style={{ width: HEADER_UNDERLINE_WIDTH }} />

      <form>
        <div className={styles.checkBoxesContainer}>
          <StartStateCheckBox stateIndex={index} />
          <br />
          <br />
          <CheckBoxField
            buttonText={FINAL_STATE_LABEL}
            isDisabled={false}
            isChecked={
              stateAttributes.find((a) => a.label === FINAL_STATE_LABEL).value
            }
            handleClick={handleFinalStateToggle}
          />
        </div>
        <div className={styles.container}>
          {stateAttributes.map(
            (attribute) =>
              attribute.label !== FINAL_STATE_LABEL && (
                <>
                  <label className={styles.inputPrompt}>
                    {attribute.label}
                    <strong
                      style={{
                        opacity: !attribute.value?.length && "0.5",
                      }}
                    >
                      :
                    </strong>
                  </label>

                  <span style={{ display: "inline-block" }}>
                    <input
                      className={styles.input}
                      type="text"
                      name="state name"
                      value={attribute.value}
                      onChange={(e) => attribute.setAttribute(e.target.value)}
                    />
                  </span>
                </>
              )
          )}
        </div>
        <DeleteButton
          action={(e) => {
            e.preventDefault();
            handleDeleteState();
          }}
          type={DELETE_BUTTON_TEXT}
        />
      </form>
    </div>
  );
};

export default StateAttributes;
