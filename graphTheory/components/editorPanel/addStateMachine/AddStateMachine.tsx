import { useRef, useState } from "react";
import Button from "../../button/Button";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";
import styles from "./AddStateMachine.module.scss";

interface AddStateMachineProps {
  handleAddStateMachine: (stateMachiine: string) => void;
  handleClose: () => void;
}

const AddStateMachine: React.FC<AddStateMachineProps> = ({
  handleAddStateMachine,
  handleClose,
}) => {
  const ref = useRef(null);
  useOutsideAlerter(ref, handleClose);

  const [title, setTitle] = useState("");

  return (
    <div ref={ref} className={styles.addWorkspace}>
      <label className={styles.label}>State Machine Title</label>
      <input
        className={styles.input}
        value={title}
        type="text"
        placeholder={"Title..."}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button
        style={{ width: "185px" }}
        type="Create"
        action={() => handleAddStateMachine(title)}
      />
    </div>
  );
};

export default AddStateMachine;
