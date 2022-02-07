import { useContext } from "react";
import { IsLightModeContext } from "../../context/IsLightModeProvider";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  const { isLightMode } = useContext(IsLightModeContext);

  return (
    <div
      className={styles.layout}
      style={{ color: isLightMode ? "black" : "white" }}
    >
      {children}
    </div>
  );
};

export default Layout;
