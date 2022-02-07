import Select from "react-select";
import styles from "./EditorPanel.module.scss";
import AddButton from "../button/AddButton";
import { useContext, useEffect, useState } from "react";
import UncreatedStateNode from "./UncreatedStateNode";
import StateMahcineOption from "./stateMachineOption/StateMachineOption";
import AddStateMachine from "./addStateMachine/AddStateMachine";
import { IsLightModeContext } from "../../../context/IsLightModeProvider";
import { DARK_MODE_BACKGROUND } from "../../constants/styleConstants";

const EditorPanel = () => {
  const addStateNode = () =>
    setNodes((prev) => [
      ...prev,
      <UncreatedStateNode addStateNode={addStateNode} />,
    ]);

  const [nodes, setNodes] = useState([
    <UncreatedStateNode addStateNode={addStateNode} />,
  ]);

  const { isLightMode } = useContext(IsLightModeContext);

  const [currentStateMachine, setCurrentStateMachine] = useState("");
  const [stateMachines, setStateMachines] = useState([]);

  useEffect(() => {
    setCurrentStateMachine(localStorage.getItem("currentStateMachine") ?? "");
  }, [setCurrentStateMachine]);

  useEffect(() => {
    setStateMachines(JSON.parse(localStorage.getItem("stateMachines")) ?? []);
  }, [setStateMachines]);

  const [showAddStateMachine, setShowAddStateMachine] = useState(false);

  const handleAddStateMachine = (newStateMachine: string) => {
    localStorage.setItem(
      "stateMachines",
      JSON.stringify([...stateMachines, newStateMachine])
    );
    localStorage.setItem("currentStateMachine", newStateMachine);
    setCurrentStateMachine(newStateMachine);
    setStateMachines((prev) => [...prev, newStateMachine]);
    setShowAddStateMachine(false);
  };

  console.log(isLightMode);

  return (
    <>
      {showAddStateMachine && (
        <AddStateMachine
          handleAddStateMachine={handleAddStateMachine}
          handleClose={() => setShowAddStateMachine(false)}
        />
      )}
      <div
        className={styles.editorPanel}
        style={{
          boxShadow: !isLightMode && "white 0 0 9px",
          background: !isLightMode && DARK_MODE_BACKGROUND,
        }}
      >
        <div
          style={{
            width: "205px",
            margin: "auto",
            marginTop: "1.4rem",
            marginBottom: "4rem",
            display: "none",
          }}
        >
          <label className={styles.selectLabel}>Select State Machine</label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            name="State Machine"
            defaultValue={{
              label: currentStateMachine,
              value: currentStateMachine,
            }}
            options={stateMachines.map((sm) => ({
              label: (
                <StateMahcineOption stateMachine={sm} isSelected={false} />
              ),
              value: sm,
            }))}
          />
          <AddButton
            message="State Machine"
            action={() => setShowAddStateMachine(true)}
          />
        </div>

        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            Add a Node
          </h3>
          {nodes}
        </div>
      </div>
    </>
  );
};

export default EditorPanel;
