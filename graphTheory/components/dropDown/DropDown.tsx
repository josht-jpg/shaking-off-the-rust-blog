import { useContext, useState } from "react";
import styles from "./DropDown.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  DARK_MODE_BACKGROUND,
  LIGHT_MODE_BACKGROUND,
} from "../../constants/styleConstants";
import { IsLightModeContext } from "../../../context/IsLightModeProvider";

const DropDown = () => {
  const { isLightMode } = useContext(IsLightModeContext);
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
            To Add a Node:
          </i>
          <br />
          Drag in a Node from the panel above.
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
            To Add an Edge:
          </i>
          <br />
          Hover over a created node, hold down shift, then hold down the left
          click and drag your mouse to another node.
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
          Hold down the left click on an edge or node and start dragging it
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
            To Edit Node Details and Colors:
          </i>
          <br />
          Right click on the node.
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
            To Edit Edge Details and Colors:
          </i>
          <br />
          Left click on the Edge.
        </strong>
      </div>
    </div>
  );
};

export default DropDown;
