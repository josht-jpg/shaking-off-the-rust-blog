import { useContext, useState } from "react";
import IsLightModeContext from "../../contexts/IsLightModeContext";
import styles from "./DropDown.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  DARK_MODE_BACKGROUND,
  LIGHT_MODE_BACKGROUND,
} from "../../constants/styleConstants";

const DropDown = () => {
  const isLightMode = useContext(IsLightModeContext);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`${styles.dropDown} ${isSelected && styles.animateDropDown}`}
      style={{
        boxShadow: !isLightMode && "white 0 0 9px",
        color: !isLightMode && "white",
        backgroundColor: isLightMode
          ? LIGHT_MODE_BACKGROUND
          : DARK_MODE_BACKGROUND,
      }}
      onClick={() => setIsSelected((prev) => !prev)}
    >
      <div style={{ cursor: "pointer" }}>
        <h3
          style={{
            marginTop: "7px",
            fontSize: "1.075rem",
            display: "inline-block",
          }}
        >
          How to use this thing
        </h3>
        {isSelected ? (
          <IoIosArrowUp style={{ marginTop: "7px", marginLeft: "8%" }} />
        ) : (
          <IoIosArrowDown style={{ marginTop: "7px", marginLeft: "8%" }} />
        )}
      </div>

      <div>
        <strong>
          <i
            style={{
              fontStyle: "normal",
              fontSize: "1.18rem",
            }}
          >
            To Add a State:
          </i>
          <br />
          Drag in a state from the panel above.
        </strong>
        <br />
        <br />
        <br />
        <strong>
          <i
            style={{
              fontStyle: "normal",
              fontSize: "1.18rem",
            }}
          >
            To Add an input:
          </i>
          <br />
          Hover over a created state, hold down shift, then hold down the left
          click and drag your mouse to another state.
        </strong>
        <br />
        <br />
        <br />
        <strong>
          <i
            style={{
              fontStyle: "normal",
              fontSize: "1.18rem",
            }}
          >
            To Move Something:
          </i>
          <br />
          Hold down the left click on an input or state and start dragging it
          around.
        </strong>
        <br />
        <br />
        <br />
        <strong>
          <i
            style={{
              fontStyle: "normal",
              fontSize: "1.18rem",
            }}
          >
            To Edit State Details and Colors:
          </i>
          <br />
          Right click on the state.
        </strong>
        <br />
        <br />
        <br />
        <strong>
          <i
            style={{
              fontStyle: "normal",
              fontSize: "1.18rem",
            }}
          >
            To Edit Input Details and Colors:
          </i>
          <br />
          Left click on the Input.
        </strong>
      </div>
    </div>
  );
};

export default DropDown;
