import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import styles from "./CheckBoxField.module.scss";

interface CheckBoxFieldProps {
  buttonTitle?: string;
  buttonText: string;
  isDisabled: boolean;
  isChecked: boolean;
  handleClick: (e) => void;
}

const CheckBoxField: React.FC<CheckBoxFieldProps> = ({
  buttonTitle,
  buttonText,
  isDisabled,
  isChecked,
  handleClick,
}) => {
  return (
    <>
      <button
        className={styles.button}
        title={buttonTitle}
        disabled={isDisabled}
        onClick={handleClick}
      >
        {isChecked ? (
          <FaCheckSquare
            className={styles.check}
            style={{
              cursor: !isDisabled && "pointer",
            }}
          />
        ) : (
          <FaRegSquare
            className={styles.check}
            style={{
              opacity: isDisabled && "0.5",
              cursor: !isDisabled && "pointer",
            }}
          />
        )}
      </button>

      <label
        style={{
          fontWeight: "bold",
          opacity: isDisabled && "0.5",
        }}
      >
        {buttonText}
      </label>
    </>
  );
};

export default CheckBoxField;
