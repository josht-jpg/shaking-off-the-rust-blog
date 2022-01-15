import styles from "./Button.module.scss";

interface ButtonProps {
  type: string;
  action?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: any;
}

const Button: React.FC<ButtonProps> = ({ type, action, style }) => {
  return (
    <button
      className={styles.container}
      style={{ backgroundColor: "white", ...style }}
      data-testid="submit-button"
      onClick={(e) => action && action(e)}
    >
      <div className={styles.messageContainer} style={{ paddingRight: "0" }}>
        <p className={styles.message}>{type}</p>
      </div>
    </button>
  );
};

export default Button;
