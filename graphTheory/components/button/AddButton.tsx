import React from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./Button.module.scss";

interface AddButtonProps {
  message: string;
  action: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ message, action }) => {
  return (
    <button className={styles.container} onClick={() => action()}>
      <span className={styles.iconContainer}>
        <FaPlus style={{ opacity: "0.6" }} />
      </span>

      <div className={styles.messageContainer}>
        <p className={styles.message}>{`Add ${message}`}</p>
      </div>
    </button>
  );
};

export default AddButton;
