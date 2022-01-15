import { useRef } from "react";
import useOutsideAlerter from "../../../../hooks/useOutsideAlerter";
import styles from "./InputDetails.module.scss";
import EditableAttribute from "../../../../interfaces/editableAttribute";
import DeleteButton from "../../../button/DeleteButton";

interface InputDetailsProps {
  inputAttributes: any; //EditableAttribute<string | number>[];
  onClickCoordinates: any;
  handleClose: () => void;
  handleDeleteInput: () => void;
}

const InputDetails: React.FC<InputDetailsProps> = ({
  inputAttributes,
  onClickCoordinates,
  handleClose,
  handleDeleteInput,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideAlerter(ref, handleClose);

  const detailsWidthInPx = 275;

  return (
    <div
      className={styles.stateDetails}
      ref={ref}
      style={{
        width: detailsWidthInPx,
        left: `${onClickCoordinates.x - 130}px`,
        top: `${
          onClickCoordinates.y +
          (onClickCoordinates.y > window.innerHeight / 2 ? -360 : 25)
        }px`,
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "0" }}>Input Details</h3>
      <hr style={{ width: "50%" }} />

      <form>
        <div className={styles.container}>
          {inputAttributes.map((attribute) => (
            <>
              <label className={styles.inputPrompt}>
                {attribute.label}
                <strong>:</strong>
              </label>
              <span style={{ display: "inline-block" }}>
                <input
                  className={styles.input}
                  type="text"
                  name="inputName"
                  value={attribute.value}
                  onChange={(e) =>
                    attribute.setAttribute(
                      attribute.label === "Weight"
                        ? !!e.target.value
                          ? parseFloat(e.target.value)
                          : 0
                        : e.target.value
                    )
                  }
                />
              </span>
            </>
          ))}
        </div>
        <DeleteButton
          type="Delete Input"
          action={(e) => {
            e.preventDefault();
            handleDeleteInput();
          }}
        />
      </form>
    </div>
  );
};

export default InputDetails;
