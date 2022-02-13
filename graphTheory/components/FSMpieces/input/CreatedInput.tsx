import * as d3 from "d3";
import { MouseEvent, useContext } from "react";
import { useEffect, useState } from "react";
import Latex from "react-latex-next";
import StartStateContext from "../../../contexts/StartStateContext";
import changeInputInLocalStorage from "../../../utils/changeInputInLocalStorage";
import { isValidCSSColor } from "../../../utils/CSSColors";
import preventHightlight from "../../../utils/preventHighlight";
import InputDetails from "./inputDetails/InputDetails";
import "katex/dist/katex.min.css";
import removeWhiteSpace from "../../../utils/removeWhiteSpace";
import useBendInput from "../../../hooks/useBendInput";
import {
  changeInputColor,
  changeInputNameInStorage,
  changeInputTextColorInStorage,
  getInputNameFronStorage,
  getInputTextColorFromStorage,
  inputTextPosition,
  removeInputFromStorage,
} from "../../../utils/inputUtils";
import LatexLabel from "../../LatexLabel";
import { TRANSITION_TIME } from "../../../constants/styleConstants";
import { IsLightModeContext } from "../../../../context/IsLightModeProvider";

interface CreatedInputProps {
  id: string;
  example?: string;
}

interface coordinates {
  x: number;
  y: number;
}

const CreatedInput: React.FC<CreatedInputProps> = ({ id, example }) => {
  const { isLightMode } = useContext(IsLightModeContext);

  const [isSelected, setIsSelected] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [onClickCoordinates, setOnClickCoordinates] = useState<
    coordinates | undefined
  >();

  const [textLeft, setTextLeft] = useState<number | undefined>();
  const [textTop, setTextTop] = useState<number | undefined>();

  const line = d3.select(id);

  const bendInput = useBendInput();

  const updateTextPosition = () => {
    const { top, left } = inputTextPosition(line);
    setTextTop(top);
    setTextLeft(left);
  };

  const changeInputArc = (mouseEvent: globalThis.MouseEvent) => {
    bendInput(line, mouseEvent);
    updateTextPosition();
  };

  const handleMouseMove = (mouseEvent: globalThis.MouseEvent) => {
    if (isMouseDown) {
      preventHightlight(mouseEvent);
      changeInputArc(mouseEvent);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isMouseDown]);

  const inputOpacity = () => (isSelected ? "1" : "0.4");
  useEffect(() => {
    line.attr("opacity", inputOpacity());
  }, [isSelected]);

  const [_, setStartStateIndex] = useContext(StartStateContext);

  const handleDeleteInput = () => {
    if (id.includes("Start")) {
      setStartStateIndex(undefined);
    }
    setIsSelected(false);
    d3.select(id).attr("visibility", "hidden");
    d3.select(id.replace("Number", "Text"))?.attr("visibility", "hidden");
    removeInputFromStorage(id.replace("#", ""));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code?.includes("Delete") && isSelected) {
      handleDeleteInput();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isSelected, handleDeleteInput]);

  const [name, setName] = useState(
    getInputNameFronStorage(id.replace("#", ""))
  );

  const handleMouseUp = () => {
    setIsMouseDown(false);
    !example &&
      false &&
      changeInputInLocalStorage("d", line.attr("d"), id.replace("#", ""));
  };

  const handleInputClick = (mouseEvent: MouseEvent) => {
    setOnClickCoordinates({ x: mouseEvent.clientX, y: mouseEvent.clientY });
    setIsSelected((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    line.on("click", handleInputClick);
    line.on("mousedown", () => setIsMouseDown(true));

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      line.on("click", null);
      line.on("mousedown", null);
    };
  }, [line]);

  const inputColor = () =>
    d3.select(id)?.attr("stroke") !== "gray"
      ? d3.select(id)?.attr("stroke")
      : "";
  const [color, setColor] = useState(inputColor());

  const [textColor, setTextColor] = useState(
    getInputTextColorFromStorage(id.replace("#", ""))
  );

  const inputAttributes = [
    {
      value: name,
      setAttribute: setName,
      label: <LatexLabel labelType={"Input"} />,
    },

    { value: color, setAttribute: setColor, label: "Line Color" },
    { value: textColor, setAttribute: setTextColor, label: "Text Color" },
  ];

  const handleTextClick = (mouseEvent: MouseEvent) => {
    setOnClickCoordinates({ x: mouseEvent.clientX, y: mouseEvent.clientY });
    setIsSelected((prev) => !prev);
  };

  const initializeTextClickIfNotAlreadySet = () => {
    if (!d3.select(id.replace("Number", "Text")).on("click")) {
      d3.select(id.replace("Number", "Text")).on("click", handleTextClick);
    }
  };

  const handleNameChange = () => {
    initializeTextClickIfNotAlreadySet();
    updateTextPosition();
    changeInputNameInStorage(id.replace("#", ""), name);
  };

  useEffect(() => {
    handleNameChange();
  }, [name, id]);

  useEffect(() => {
    if (isValidCSSColor(color)) {
      changeInputColor(id, color);
    }
  }, [color, id]);

  useEffect(() => {
    if (isValidCSSColor(textColor)) {
      changeInputTextColorInStorage(id.replace("#", ""), textColor);
    }
  }, [textColor, id]);

  return (
    <>
      {isSelected && (
        <InputDetails
          inputAttributes={inputAttributes}
          onClickCoordinates={onClickCoordinates}
          handleClose={() => setIsSelected(false)}
          handleDeleteInput={handleDeleteInput}
        />
      )}
      <p
        id={id.replace("#", "").replace("Number", "Text")}
        className={"inputTitle"}
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          cursor: "pointer",
          color: !!textColor
            ? removeWhiteSpace(textColor)
            : isLightMode
            ? "gray"
            : "white",
          opacity: !isSelected && "0.85",
          position: "absolute",
          transition: `color ${TRANSITION_TIME}`,
          left: textLeft,
          top: textTop,
          textAlign: "center",
        }}
      >
        <strong>{!!name && <Latex>{name}</Latex>}</strong>
        <br />
      </p>
    </>
  );
};

export default CreatedInput;
