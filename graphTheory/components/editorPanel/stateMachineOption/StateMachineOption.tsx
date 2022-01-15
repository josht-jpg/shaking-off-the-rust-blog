import styles from "./StateMachineOption.module.scss";

interface WorkspaceOptionProps {
  stateMachine: string;
  isSelected: boolean;
}

const StateMahcineOption: React.FC<WorkspaceOptionProps> = ({
  stateMachine,
  isSelected,
}) => (
  <>
    {isSelected ? (
      stateMachine
    ) : (
      <div className={styles.option}>
        <textarea
          className={styles.title}
          style={{
            width: isSelected ? "11rem" : "",
            marginLeft: isSelected ? "1rem" : "",
          }}
          value={stateMachine}
          readOnly={true}
        />
      </div>
    )}
  </>
);

export default StateMahcineOption;
